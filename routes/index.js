const express = require('express');
const posts = require('./posts');
const tags = require('./tags');

const router = express.Router();

router.use('/tags', tags);
router.use('/posts', posts);

module.exports = router;
