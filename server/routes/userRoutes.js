const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
  updateUserEmail,
  updateUserPassword,
  uploadUserAvatar,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");
const upload  = require("../middleware/upload");

// /api/users/
router.post("/", registerUser);
router.post("/login", loginUser);
router.put("/update-email", protect, updateUserEmail);
router.put("/update-password", protect, updateUserPassword);

router.post("/upload-avatar", protect, upload.single('avatar'), uploadUserAvatar);

router.get("/me", protect, getUser);

module.exports = router;
