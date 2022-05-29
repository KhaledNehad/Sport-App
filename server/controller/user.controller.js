import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from './../models/userModel.js';
import { validationResult } from 'express-validator';

export const signIn = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: `User doesn't exist. ` });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: `Invalid Credentials` });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.TOKEN_SECRET,
      { expiresIn: '1h' }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

export const signUp = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  const { username, email, password, confirmPassword } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: `User already exist. ` });
    if (password !== confirmPassword)
      return res
        .status(400)
        .json({ message: `Password and confirm password not match. ` });

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      process.env.TOKEN_SECRET,
      { expiresIn: '1h' }
    );
    await newUser.save();
    res.status(200).json({ newUser, token });
  } catch (error) {
    console.log(error);
    // res.status(500).json({ message: 'Something went wrong.' });
  }
};
