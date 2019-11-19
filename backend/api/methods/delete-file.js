const request = require('request');

/**
 * Deletes a file on the file storage server
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