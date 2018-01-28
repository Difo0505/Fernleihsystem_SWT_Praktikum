const mySql = require('mysql');
const db = require('../services/db');
const uuidv1 = require('uuid/v1');
const mailer = require('../services/mailer.js');
const fecha = require('fecha');
module.exports = app => {
  //fetch books alph order
  app.get('/api/getBook', async (req, res) => {
    let sql =
      'SELECT * FROM dokument JOIN dokument_autor JOIN autor WHERE dokument_autor.dokument_autorid=autor.autorid AND dokument.dokumentid = dokument_autor.dokument_dokumentid order by titel ASC';
    let query = await db.query(sql, (err, results) => {
      if (err) throw err;
      res.send(JSON.stringify(results));
    });
  });

  //fetch books year asc
  app.get('/api/getBook/year/asc', async (req, res) => {
    let sql =
      'SELECT * FROM dokument JOIN dokument_autor JOIN autor WHERE dokument_autor.dokument_autorid=autor.autorid AND dokument.dokumentid = dokument_autor.dokument_dokumentid order by jahr ASC';
    let query = await db.query(sql, (err, results) => {
      if (err) throw err;
      res.send(JSON.stringify(results));
    });
  });
  //fetch books year desc
  app.get('/api/getBook/year/desc', async (req, res) => {
    let sql =
      'SELECT * FROM dokument JOIN dokument_autor JOIN autor WHERE dokument_autor.dokument_autorid=autor.autorid AND dokument.dokumentid = dokument_autor.dokument_dokumentid order by jahr DESC';
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

  //save the orders
  app.post('/api/postOrder', async (req, res) => {
    var ausleihenderid = '';
    var bestellungsIds = [];
    var sql = '';
    var query;
    console.log(req.body.userInfos);
    //test if user exists
    // sql =
    //   'SELECT vorname , nachname FROM ausleihender WHERE email="' +
    //   req.body.userInfos.email +
    //   '"';
    // query = await db.query(sql, (err, results) => {
    //   if (err) {
    //     throw err;
    //     return res.send('error');
    //   }
    //   console.log(results);
    // });

    sql =
      'INSERT INTO ausleihender(vorname , nachname , strasse , hausnummer , plz , stadt , email ) VALUES("' +
      req.body.userInfos.vorname +
      '"," ' +
      req.body.userInfos.nachname +
      '"," ' +
      req.body.userInfos.strasse +
      '  "," ' +
      req.body.userInfos.hausnummer +
      '"," ' +
      req.body.userInfos.plz +
      '"," ' +
      req.body.userInfos.stadt +
      '"," ' +
      req.body.userInfos.email +
      '")';
    query = await db.query(sql, (err, results) => {
      if (err) {
        throw err;
        return res.send('error');
      }
    });
    sql =
      'SELECT ausleihenderid FROM ausleihender WHERE vorname="' +
      req.body.userInfos.vorname +
      '"';
    query = await db.query(sql, async (err, results) => {
      if (err) {
        throw err;
        return res.send('error');
      }
      ausleihenderid = JSON.parse(JSON.stringify(results))[0].ausleihenderid;
      for (var i = 0; i < req.body.orders.length; i++) {
        var id = uuidv1();
        bestellungsIds.push(id);
        sql =
          'INSERT INTO bestellung(bestellungid,ausleihender_ausleihenderid,	dokument_dokumentid,bearbeitungsstatus,bestelldatum ) VALUES("' +
          id +
          '"," ' +
          ausleihenderid +
          '"," ' +
          req.body.orders[i].dokumentid +
          '","' +
          'Your Order is being processed' +
          '","' +
          fecha.format(new Date(), 'YYYY-MM-DD HH:mm:ss') +
          '")';
        query = await db.query(sql, (err, results) => {
          if (err) {
            throw err;
            return res.send('error');
          }
        });
      }
      mailer({
        email: req.body.userInfos.email,
        bestellungsIds: bestellungsIds
      });

      return res.send('ok');
    });
  });

  //check order state
  app.post('/api/getOrderState', async (req, res) => {
    let sql =
      'SELECT * FROM bestellung WHERE bestellungid="' + req.body.id + '"';
    query = await db.query(sql, (err, results) => {
      if (err) throw err;
      if (results.length !== 0) {
        return res.send(JSON.parse(JSON.stringify(results[0])));
      } else {
        res.send('not found');
      }
    });
  });
};
