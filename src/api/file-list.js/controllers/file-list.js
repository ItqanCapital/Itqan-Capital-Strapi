const fs = require('fs');
const path = require('path');

module.exports = {
  async listFiles(ctx) {
    const uploadsPath = path.join(__dirname, '../../../public/uploads');
    fs.readdir(uploadsPath, (err, files) => {
      if (err) {
        return ctx.badRequest('Could not read uploads directory');
      }
      // Send back the file names as the response
      ctx.send(files);
    });
  },
};
