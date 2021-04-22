const express = require('express');
const router = express.Router();
const controllers = require('./index.controllers');

router.get('/', controllers.setSubject);

module.exports = router;
