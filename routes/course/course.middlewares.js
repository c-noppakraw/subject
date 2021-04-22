const { check } = require('express-validator');

const validator = [
    check('course_name')
        .not()
        .isEmpty()
        .withMessage('กรุณาระบุ คอสเรียน'),
    check('course_description')
        .not()
        .isEmpty()
        .withMessage('กรุณาระบุ บอกรายละเอียด'),
    check('id_teacher')
        .not()
        .isEmpty()
        .withMessage('กรุณาระบุ อาจารย์ประจำคอส'),
    check('majer')
        .not()
        .isEmpty()
        .withMessage('กรุณาระบุ หลักสูตร'),
];

module.exports = { validator };