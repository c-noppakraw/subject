const express = require('express');
const service = require('./index.service');

const setSubject = async (req, res, next) => {
    try {
        const subject = await service.getAll();
        return res.status(200).json({ data: subject });
    } catch (error) {
        console.log(error);
    }
}

module.exports = { setSubject };