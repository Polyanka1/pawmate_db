const multer = require("multer");
const path = require("path");

// Конфигурация хранилища
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // путь к папке для хранения
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${ext}`;
    cb(null, uniqueName);
  },
});

// Фильтрация по типу файла (только изображения)
const fileFilter = (req, file, cb) => {
  const allowed = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Неверный формат файла. Допустимы только изображения.'), false);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
