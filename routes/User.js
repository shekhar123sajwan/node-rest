const express = require('express');
const userRouter = express.Router();
const user = require('../models/user');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});
var upload = multer({ storage: storage });

userRouter
    .get('/', (req, res, next) => {
        console.log(req)
        res.status(200).json({ success: true, message: req })
    })
    .post('/', upload.single('image'), (req, res, next) => {
        var err = false;
        console.log(req.file);
        const user = { name: "", email: "", password: "", c_password: "", country: "" };
        Object.entries(user).forEach(([key, value]) => {
            if (typeof(req.body[key]) == 'undefined' || (req.body[key]).length <= 0) {
                err = true;
                user[key] = `${key} not found`;
            } else {
                user[key] = req.body[key];
            }
        })
        if (err) {
            return res.status(400).json({ error: true, message: user })
        }

        const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!(req.body.email).match(pattern)) {
            return res.status(400).json({ error: true, message: "Please add valid email" });
        }

        if ((req.body.password) != (req.body.c_password)) {
            return res.status(400).json({ error: true, message: "Password did not match" });
        }

        //const user = {};
        res.status(201).json({ 'sf': 'ss' })
    })

module.exports = userRouter;