// email send

const mailer = require("nodemailer");

let transport = mailer.createTransport({
  service: "gmail",
  auth: {
    user: "johnsena098rock@gmail.com",
    pass: "John@123",
  },
});

let messageOb = {
  from: "johnsena098rock@gmail.com",
  to: "syedtamzeedali@gmail.com",
  subject: "Send email using NodeJS",
  text: "This mail is send using Node js",
};

transport.sendMail(messageOb, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email Send");
    console.log(info.response);
  }
});
