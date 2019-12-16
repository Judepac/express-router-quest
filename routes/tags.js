const express = require('express');
const tagsList = require('../data/tags');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(tagsList);
});

module.exports = router;
