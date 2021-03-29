const express = require('express');
const router = express.Router();
const Post = require('../../models/postModel');

const verify = require('./../../middleware/auth');

router.post('/add', verify, async (req, res) => {
  const post = new Post({
    title: req.body.title,
    body: req.body.body,
    image: req.body.image,
  });

  try {
    const savedPost = await post.save();
    res.send(savedPost);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
