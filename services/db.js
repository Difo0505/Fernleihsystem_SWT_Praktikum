const mySql = require('mysql');
const db = mySql.createConnection({
  // host: 'localhost',
  host: 'son1i-server-h31m.strangled.net',
  user: 'swt_ws17_gruppe1',
  password: 'OjQ42RwpYnRMIYZN',
  // database: 'swtpraktikum'
  database: 'swt_ws17_gruppe1'
});
// const db = mySql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'swtpraktikum'
// });
module.exports = db;
