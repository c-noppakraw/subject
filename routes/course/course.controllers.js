const express = require('express');
const { validationResult } = require('express-validator');
const service = require('./course.service');

const courseAll = async (req, res, next) => {
    try {
        const course = await service.getAll();
        return res.status(200).json({ data: course });
    } catch (error) {
        console.log(error);
    }
}

const create = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const data = {
            course_name: req.body.course_name,
            course_description: req.body.course_description,
            major: req.body.major,
            teacher_id: req.body.teacher_id,
        }
        const course = await service.save(data);
        return res.status(201).json({ data: course });
    } catch (error) {
        console.log(error);
    }
};

module.exports = { courseAll, create };