const express = require('express');
const router = express.Router();
const User = require('./../../models/userModel');
const bcrypt = require('bcryptjs');
const { registerValidation } = require('./../../validation');
const jwt = require('jsonwebtoken');

// Register
router.post('/', async (req, res) => {
  // Validation
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).json({ msg: error.message });
  const { username, email, password } = req.body;
  // Check if the user already Exist
  try {
    const emailExist = await User.findOne({ email: email });
    if (emailExist)
      return res.status(400).json({ msg: 'Email already exist!' });

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, {
      expiresIn: 444444,
    });
    // res.header('auth-token', token).send(token);
    res.send(user);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
