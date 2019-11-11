const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/))
        cb(new Error("File type not supported"), false);
    else
        cb(null, true);
}

module.exports = multer({ 
    storage:storage, 
    limits:{
        fileSize:1024 * 1024 * 5
    },
    fileFilter:fileFilter
}).single('image');