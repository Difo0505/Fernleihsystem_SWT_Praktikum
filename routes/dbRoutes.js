const mySql = require('mysql');
const db = require('../services/db');
module.exports = app => {
  //fetch books alph order
  app.get('/api/getBook', async (req, res) => {
    let sql =
      'SELECT * FROM dokument JOIN dokument_autor JOIN autor WHERE dokument_autor.dokument_autorid=autor.autorid AND dokument.dokumentid = dokument_autor.dokument_dokumentid order by titel ASC LIMIT 20';
    let query = await db.query(sql, (err, results) => {
      if (err) throw err;
      res.send(JSON.stringify(results));
    });
  });

  //fetch books year asc
  app.get('/api/getBook/year/asc', async (req, res) => {
    let sql =
      'SELECT * FROM dokument JOIN dokument_autor JOIN autor WHERE dokument_autor.dokument_autorid=autor.autorid AND dokument.dokumentid = dokument_autor.dokument_dokumentid order by jahr ASC LIMIT 20';
    let query = await db.query(sql, (err, results) => {
      if (err) throw err;
      res.send(JSON.stringify(results));
    });
  });
  //fetch books year desc
  app.get('/api/getBook/year/desc', async (req, res) => {
    let sql =
      'SELECT * FROM dokument JOIN dokument_autor JOIN autor WHERE dokument_autor.dokument_autorid=autor.autorid AND dokument.dokumentid = dokument_autor.dokument_dokumentid order by jahr DESC LIMIT 20';
    let query = await db.query(sql, (err, results) => {
      if (err) throw err;
      res.send(JSON.stringify(results));
    });
  });

  //fetch search results by "author"
  app.post('/api/searchBy/author', async (req, res) => {
    let sql =
      'SELECT * FROM dokument JOIN dokument_autor JOIN autor WHERE dokument_autor.dokument_autorid=autor.autorid AND dokument.dokumentid = dokument_autor.dokument_dokumentid AND autor.autor LIKE "%' +
      req.body.value +
      '%"';
    let query = await db.query(sql, (err, results) => {
      if (err) throw err;
      res.send(JSON.stringify(results));
    });
  });

  //fetch search results by title
  app.post('/api/searchBy/titel', async (req, res) => {
    let sql =
      'SELECT * FROM dokument JOIN dokument_autor JOIN autor WHERE dokument_autor.dokument_autorid=autor.autorid AND dokument.dokumentid = dokument_autor.dokument_dokumentid AND dokument.titel LIKE "%' +
      req.body.value +
      '%"';
    let query = await db.query(sql, (err, results) => {
      if (err) throw err;
      console.log(JSON.stringify(results));
      res.send(JSON.stringify(results));
    });
  });
};
