const AboutMe = require('../models/AboutMe');

exports.getAboutMe = async(req, res) => {
    try {
        const result = await AboutMe.find({});
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'An error occurred while fetching the About Me data',
            error: error.message
        });
    }
}

exports.createAboutMe = async(req, res) => {
    try {
        const create = req.body;
        const createdAboutMe = await AboutMe.create(create);
        res.status(201).json({
            message: "About Me was created successfully",
            aboutme: createdAboutMe
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'An error occurred while creating an About Me',
            error: error.message
        });
    }
}