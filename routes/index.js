const express = require('express');
const router = express.Router();
const controllers = require('./index.controllers');

router.get('/', controllers.subjectAll);

module.exports = router;
