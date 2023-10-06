const path = require("path");

const multer = require("multer");

/* FILE STORAGE */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images/avatars/"));
  },
  filename: function (req, file, cb) {
    // let ext = path.extname(file.originalname);
    // cb(null, file.originalname + Date.now() + ext);
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

module.exports = upload;
