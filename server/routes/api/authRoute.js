const express = require('express');
const router = express.Router();
const User = require('./../../models/userModel');
const bcrypt = require('bcryptjs');
const { registerValidation, loginValidation } = require('./../../validation');
const jwt = require('jsonwebtoken');

// Login
router.post('/', async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).json({ msg: error.message });
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ msg: 'Email or password is wrong!' });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(400).json({ msg: 'Invalid password' });

    // Create and assign token
    const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, {
      expiresIn: 36000,
    });
    res.header('auth-token', token).send(token);
    res.send('Logged in');
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
