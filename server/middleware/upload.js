const path = require("path");
const os = require("os");
const multer = require("multer");

/* FILE STORAGE */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const tmpDir = os.tmpdir();
    cb(null, tmpDir); // Use the system's temporary directory
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
