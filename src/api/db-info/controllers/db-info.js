const path = require('path');

module.exports = {
  async getDbPath(ctx) {
    // Get the absolute path to the SQLite database file
    const dbPath = path.resolve(__dirname, '../../../.tmp/data.db');

    // Return the path as a response
    ctx.send({ dbPath });
  },
};
