import express from 'express';
import getImagesIndex from './controllers/getImagesIndex.js';
import cors from 'cors';
import path from 'path';
import multer from 'multer';

const startServer = () => {

  const __dirname = path.resolve();

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, 'upload'));
    },
    filename: (req, file, cb) => {
      cb(null, `${file.originalname}`);
    },
  });

  const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Images only'), false);
    }
  };

  const upload = multer({
    storage,
    fileFilter,
  }).single('file');


  const app = express();
  const PORT = 3001;

  app.use(cors());

  app.use(express.json());

  app.use('/images', express.static(path.join(__dirname, 'upload')));

  app.post('/upload', (req, res) => {
    upload(req, res, err => {
      if (err) {
        console.error('Error uploadin:', err);
        return res.status(500).send('Errpr uploading');
      }
      console.log('Sussess');
      res.send('Image uploaded');
    });
  });

  app.get('/', (req, res) => {
    try {
      console.log('Hey, it works')
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get('/getFiles', (req, res) => {
    try {
      const folderPath = req.query.folderPath;
      const filesInfo = getImagesIndex(folderPath);
      res.status(200).json(filesInfo);
      console.log('Images requested: \n', filesInfo)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.listen(PORT, () => {
    console.log(`Server stared on port ${PORT}`);
  });
};

export default startServer;
