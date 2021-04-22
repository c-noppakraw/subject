const { Teacher } = require('../../models');
const dayjs = require('dayjs');

const getAll = async () => {
    try {
        const teacher = await Teacher.findAll();
        return teacher;
    } catch (error) {
        console.log(error);
    }
};

const save = async (data) => {
    try {
        let day = dayjs().format();
        const teacher = await Teacher.create({
            first_name: data.first_name,
            last_name: data.last_name,
            age: data.age,
            gender: data.gender,
            createdAt: day,
            updatedAt: day
        });
        return teacher;
    } catch (error) {
        console.log(error);
    }
};

module.exports = { getAll, save };