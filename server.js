const express = require('express');
const path = require('path');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const db = require('./services/db');

db.connect(err => {
  if (!err) console.log('database connected');
  else throw err;
});
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//db routes
require('./routes/index')(app);
require('./routes/dbRoutes')(app);

//starting the app on PORT
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
const PORT = process.env.PORT || 80;
app.listen(PORT);
