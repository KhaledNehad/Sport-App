import express from 'express';
import { createPost, getPosts } from '../controller/posts.controller.js';
import { check, validationResult } from 'express-validator';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);

export default router;
