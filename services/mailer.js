const nodemailer = require('nodemailer');
const mailerConfig = require('../config/mailer.config');

function createMailBody(bestellungsIds) {
  var header =
    "<h1>Your Order is being processed</h1><p>Those are your Order IDs. You Can check your orders State bei typing your email + the ID under 'Check My Orders'</p>";
  var ids = '<ul>';
  bestellungsIds.map(id => {
    ids = ids.concat('<li>' + id + '</li>');
  });
  ids = ids.concat('</ul>');
  var body = header.concat(ids);
  return body;
}

module.exports = mailInfos => {
  var transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: mailerConfig.mailAdresse,
      pass: mailerConfig.mailPassword
    }
  });

  let mailOptions = {
    from: mailerConfig.mailAdresse, // sender address
    to: mailInfos.email, // list of receivers
    subject: 'Thanks for your Order', // Subject line
    // text: 'Your order', // plain text body
    html: createMailBody(mailInfos.bestellungsIds) // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
};
