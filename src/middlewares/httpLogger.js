const HttpLog = require("../models/HttpLog");

async function httpLogger(req, res, next) {
  // Сохраним исходные методы, чтобы перехватить статус-код при ответе
  const startAt = process.hrtime();
  const { method, url } = req;
  const userAgent = req.headers["user-agent"];
  const ip = req.ip || req.connection.remoteAddress;

  // Перехватываем, когда будет отправлен ответ (res.end)
  // но в Express 4/5 проще — можем повеситься на res.on('finish'), 
  // чтобы получить statusCode уже после обработки
  res.on("finish", async () => {
    const { statusCode } = res;
    const diff = process.hrtime(startAt);
    const responseTime = diff[0] * 1e3 + diff[1] * 1e-6; // в миллисекундах

    // Создаём запись в Mongo
    await HttpLog.create({
      method,
      url,
      statusCode,
      userAgent,
      ip,
      // Дополнительно можем сохранить время ответа
      responseTime: responseTime.toFixed(3), 
    });
  });

  next();
}

module.exports = httpLogger;