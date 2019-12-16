const express = require('express');
const tagsList = require('../data/tags');
const posts = require('./posts');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(tagsList);
});

router.use('/:tagId/posts', posts);
module.exports = router;
