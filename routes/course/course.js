const express = require('express');
const router = express.Router();
const controllers = require('./course.controllers');
const middlewares = require('./course.middlewares');

router.get('/', controllers.courseAll);
router.post('/', middlewares.validator, controllers.create);

module.exports = router;