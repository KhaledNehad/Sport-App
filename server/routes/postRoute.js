const express = require('express');
const router = express.Router();
const Posts = require('../models/postModel');

const verify = require('./../middleware/auth');

router.post('/posts/add', verify, async (req, res) => {
  const post = new Post({
    title: req.body.title,
    body: req.body.body,
    image: req.body.image,
  });

  try {
    const savedPost = await post.save();
    res.send(savedPost);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
