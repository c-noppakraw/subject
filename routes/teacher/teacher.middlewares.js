const { check } = require('express-validator');

const validator = [
    check('first_name')
        .not()
        .isEmpty()
        .withMessage('กรุณาระบุ ชื่อจริง'),
    check('last_name')
        .not()
        .isEmpty()
        .withMessage('กรุณาระบุ นามสกุล'),
    check('age')
        .not()
        .isEmpty()
        .withMessage('กรุณาระบุ อายุ'),
    check('gender')
        .not()
        .isEmpty()
        .withMessage('กรุณาระบุ เพศ'),
];

module.exports = { validator };