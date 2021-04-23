const { Course } = require('../../models');
const dayjs = require('dayjs');

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
        let day = dayjs().format();
        const course = await Course.create({
            course_name: data.course_name,
            course_description: data.course_description,
            majer: data.majer,
            TeacherIdTeacher: data.teacher_id,
            createdAt: day,
            updatedAt: day
        });
        return course;
    } catch (error) {
        console.log(error);
    }
};

module.exports = { getAll, save };