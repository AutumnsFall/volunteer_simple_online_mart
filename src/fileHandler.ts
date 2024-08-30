import multer from 'multer';
import path from 'path';

const directory = path.join(__dirname + '../../public/images');

const storage = multer.diskStorage({
    destination: directory,
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

export const fileHandler = multer({ storage: storage });
