const multer = require('multer');
const fs = require('fs');
const https = require('https');
const request = require('request');
const { promisify } = require('util')
const unlinkAsync = promisify(fs.unlink);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './tmp/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname.replace(/\s/g, ''))
    }
});

const fileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/))
        cb(new Error("File type not supported"), false);
    else {
        cb(null, true);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
}).single('image');

module.exports = async (req, res, next) => {
    try {
        await upload(req, res, async (err) => {
            try {
                if (err) {
                    return res.status(500).json({ error:err.message });
                } else {
                    if(!req.file) {
                        next();
                    } else {
                        const formData = {
                            // Pass data via Streams
                            image: fs.createReadStream(req.file.path),
                        };

                        try {
                            await request.post({
                                url: process.env.FILE_STORAGE,
                                formData: formData
                            }, async function optionalCallback(err, httpResponse, body) {
                                body = JSON.parse(body);
                                if (err) {
                                    return res.status(500).json({ error:err });
                                }

                                if(httpResponse.statusCode != 200) {
                                    return res.status(500).json({ error:body.message });
                                }

                                await unlinkAsync(req.file.path).catch(err => {
                                    return res.status(500).json({ error:err });
                                });
                                req.file = body.filename;
                                console.log(body);
                                next();
                            });
                        } catch (err) {
                            throw new Error(err.message);
                        }
                    }
                }
            } catch (err) {
                console.log("Error: " + err.message);
                throw new Error(err.message);
            }
        });
    } catch (err) {
        console.log("Error: " + err.message);
        return res.status(500).json({ error:err.message });
    }
}

