const express = require('express');
const router = express.Router();
const controllers = require('./teacher.controllers');
const middlewares = require('./teacher.middlewares');

router.get('/', controllers.setTeacher);
router.post('/', middlewares.validator, controllers.create);

module.exports = router;