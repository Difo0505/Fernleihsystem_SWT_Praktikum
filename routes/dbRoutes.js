const mySql = require('mysql');
const db = require('../services/db');
module.exports = app => {
  app.get('/api/getBook', async (req, res) => {
    let sql = 'SELECT * FROM document NATURAL JOIN document_author2  LIMIT 20';
    let query = await db.query(sql, (err, results) => {
      if (err) throw err;
      res.send(JSON.stringify(results));
    });
  });
};
