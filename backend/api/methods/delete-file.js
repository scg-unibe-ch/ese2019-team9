const request = require('request');


/*

      */

module.exports = (filename) => {
    request({
        method: 'DELETE',
        preambleCRLF: true,
        postambleCRLF: true,
        uri: process.env.FILE_STORAGE,
        multipart: [
          {
            'content-type': 'application/json',
            body: JSON.stringify({ filename: filename })
          }
        ]
      });
}