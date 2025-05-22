const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail", // Или другая почтовая служба
  auth: {
    user: 'realpawmate@gmail.com',
    pass: 'ifye xemo dgza hwod'
  },
});

/**
 * Отправка сообщения автору услуги
 * @param {string} to - email автора услуги
 * @param {string} userEmail - email отправителя (отображается в тексте, но не используется для отправки)
 * @param {string} message - текст сообщения
 * @param {string} subject - тема сообщения
 */
async function sendMessageToServiceAuthor({ to, userEmail, message, subject }) {
  const mailOptions = {
    from: `"Сервис-платформа" <${process.env.SMTP_USER}>`, // Заранее заданный email
    to,
    subject: `Услуга: ${subject}` ,
    text: `Вам пришло новое сообщение от ${userEmail}:\n\n${message}`,
  };

  return await transporter.sendMail(mailOptions);
}

module.exports = { sendMessageToServiceAuthor };
