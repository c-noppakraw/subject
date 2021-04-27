const { Course } = require('../../models');

const getAll = async () => {
    try {
        const course = await Course.findAll();
        return course;
    } catch (error) {
        console.log(error);
    }
};

const save = async (data) => {
    try {
        const course = await Course.create({
            course_name: data.course_name,
            course_description: data.course_description,
            major: data.major,
            TeacherIdTeacher: data.teacher_id,
        });
        return course;
    } catch (error) {
        console.log(error);
    }
};

module.exports = { getAll, save };