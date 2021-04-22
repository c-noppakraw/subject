const { Teacher, Course } = require('../models');

const getAll = async () => {
    try {
        const subject = await Teacher.findAll({
            include: [{ model: Course, as: 'Course' }]
        });
        return subject;
    } catch (error) {
        console.log(error);
    }
};

module.exports = { getAll };