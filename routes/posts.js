const express = require('express');
const comments = require('./comments');
const foundPosts = require('../data/posts');

const router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {
  const tagId = Number(req.params.tagId);
  const tagsPosts = foundPosts.filter((comment) => comment.tags_ids.includes(tagId));
  res.json(tagsPosts);
});

router.use('/:id/comments', comments);

module.exports = router;
