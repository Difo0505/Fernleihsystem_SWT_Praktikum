const mySql = require("mysql");
const db = require("../services/db");
module.exports = app => {
  app.get("/api/getBook", async (req, res) => {
    console.log(req);
    let sql = "SELECT id,text FROM books WHERE stock=2 LIMIT 20";
    let query = await db.query(sql, (err, results) => {
      if (err) throw err;
      res.send(JSON.stringify(results));
    });
  });
};
