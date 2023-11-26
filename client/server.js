const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, image, cb) {
    cb(null, './uploads'); 
  },
  filename: function (req, image, cb) {
    cb(null, image.originalname); 
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10,
    fieldSize: 1024 * 1024 * 10,
  }
});

app.use(cors());

app.post('/', (req, res) => {
  upload.single('image')(req, res, (err) => {
    if (err) {
      console.error('Ошибка загрузки файла:', err);
      res.status(500).send('Ошибка загрузки файла');
      return;
    }
    if (!req.file) {
      console.log('Файл не был загружен');
      res.status(400).send('Файл не был загружен');
      return;
    }
    console.log('Файл загружен');
    res.status(200).send('Файл успешно загружен');
  });
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
