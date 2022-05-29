import express from 'express';
import { signIn, signUp } from '../controller/user.controller.js';
import { check, body } from 'express-validator';
import User from '../models/userModel.js';
const router = express.Router();

router.post(
  '/signIn',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  signIn
);
router.post(
  '/signUp',
  [
    check('username', 'username is required').notEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
    body('confirmPassword').custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Password confirmation does not match password');
      }
      return true;
    }),
  ],
  signUp
);

export default router;
