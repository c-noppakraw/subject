const express = require('express');
const { validationResult } = require('express-validator');
const service = require('./teacher.service');

const setTeacher = async (req, res, next) => {
    try {
        const teacher = await service.getAll();
        return res.status(200).json({ data: teacher });
    } catch (error) {
        console.log(error);
    }
}

const create = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const data = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            age: req.body.age,
            gender: req.body.gender,
        }
        const teacher = await service.save(data);
        return res.status(201).json({ data: teacher });
    } catch (error) {
        console.log(error);
    }
};

module.exports = { setTeacher, create };