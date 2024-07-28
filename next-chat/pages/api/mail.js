export default function (req, res) {
  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    secure: "true",
    auth: {
      user: "ex@gmail.com",
      pass: "password",
    },
  });

  const mailData = {
    from: "Chat API",
    to: req.body.email,
    subject: `example.com`,
    text: req.body.message,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: `an error occurred ${err}` });
    }
    res.status(200).json({ message: info });
  });
}
