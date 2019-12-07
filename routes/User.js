const express = require('express');
const userRouter = express.Router();

const user = require('../models/user');

userRouter
    .get('/', (req, res, next) => {
        console.log(req)
        res.status(200).json({ success: true, message: req })
    })
    .post('/', (req, res, next) => {
        res.status(404).json({ 'sf': 'ss' })
    })


module.exports = userRouter;