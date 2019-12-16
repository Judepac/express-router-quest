const express = require('express');
const comments = require('./comments');

const router = express.Router();

router.use('/:id/comments', comments);

module.exports = router;
