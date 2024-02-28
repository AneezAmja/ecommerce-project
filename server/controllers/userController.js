// Allows us to use errorHandler
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const dotenv = require("dotenv").config();
const cloudinary = require('cloudinary').v2

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})

/**************************************************************
 *                                                            *
 *                 userController                             *
 *                                                            *
 * This module orchestrates various user-related operations,  *
 * including user registration, login, and profile management. *
 *                                                            *
 **************************************************************/

// @desc   Get products
// @route  POST /api/users
// @access Private
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill out all fields");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User exists");
  }

  //Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //CREATE user
  const user = await User.create({
    name: name,
    email: email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
      profileImageURL: "",
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc   Login a user
// @route  POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check for user email
  const user = await User.findOne({ email });

  //user.password -> due to finding the user through their email
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({
      _id: user.id,
      email,
      name: user.name,
      token: generateToken(user._id),
      // profileImageURL: user.profileImageURL
    });
  } else {
    res.status(400);
    throw new Error("Credentials do not match");
  }
});

// @desc   Get user data
// @route  GET /api/users/me
// @access Private -> protected route
const getUser = asyncHandler(async (req, res) => {
  const { _id, name, email, profileImageURL } = await User.findById(
    req.user.id
  );

  res.status(200).json({
    id: _id,
    name: name,
    email: email,
    profileImageURL: profileImageURL,
  });
});

// @desc   Update the user's email
// @route  PUT /api/users/update-email
// @access Private -> protected route
const updateUserEmail = asyncHandler(async (req, res) => {
  const { updatedEmail } = req.body;

  if (!updatedEmail) {
    res.status(400);
    throw new Error("Enter valid email");
  }

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(400);
    throw new Error("User does not exist");
  }

  user.email = updatedEmail;
  await user.save();

  res.status(200).json({
    email: "Email has been updated to: " + updatedEmail,
  });
});

// @desc   Update the user's password
// @route  PUT /api/users/update-password
// @access Private -> protected route
// const updateUserPassword = asyncHandler(async (req, res) => {
//   const { updatedPassword } = req.body;

//   if (!updatedPassword) {
//     res.status(400);
//     throw new Error("Enter valid password");
//   }

//   const user = await User.findById(req.user.id);

//   if (!user) {
//     res.status(400);
//     throw new Error("User does not exist");
//   }

//   const salt = await bcrypt.genSalt(10);
//   user.password = await bcrypt.hash(updatedPassword, salt);
//   await user.save();

//   res.status(200).json({
//     password: updatedPassword,
//   });
// });

// @desc   Update the user's avatar
// @route  POST /api/users/upload-avatar
// @access Private -> protected route
const uploadUserAvatar = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (req.file) {
    try {
      // Upload the avatar to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path, {
        transformation: [
          { width: 200, height: 200, crop: 'fill', gravity: 'face' },
          { format: 'webp' },
        ],
      });

      // Save the Cloudinary URL in your user database
      user.profileImageURL = result.secure_url;
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Avatar upload failed' });
    }
  }

  await user.save();

  res.status(201).json({
    msg: 'Avatar uploaded successfully',
    redirectUrl: '/profile',
  });
});


// @desc   Generate JWT, signs a new token with the ID and uses the secret
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
  updateUserEmail,
  // updateUserPassword,
  uploadUserAvatar,
};
