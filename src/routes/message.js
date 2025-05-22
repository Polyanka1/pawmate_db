const express = require("express");
const router = express.Router();
const Service = require("../models/Service");
const User = require("../models/User");
const { sendMessageToServiceAuthor } = require("../utils/mailer");

router.post("/:serviceId", async (req, res) => {
  const { email, message } = req.body;
  const { serviceId } = req.params;

  try {
    const service = await Service.findByPk(serviceId);
    if (!service) {
      return res.status(404).json({ error: "Услуга не найдена" });
    }

    const author = await User.findByPk(service.user_id);
    if (!author || !author.email) {
      return res.status(404).json({ error: "Автор услуги не найден или не имеет почты" });
    }

    await sendMessageToServiceAuthor({
        to: author.email,
        userEmail: email, // отображается в письме, но не используется для отправки
        message,
        subject: service.title
      });

    res.status(200).json({ message: "Сообщение успешно отправлено автору услуги" });
  } catch (error) {
    console.error("Ошибка при отправке сообщения:", error);
    res.status(500).json({ error: "Ошибка при отправке сообщения" });
  }
});

module.exports = router;
