const Project = require('../models/Projects');

exports.getProjects = async(req, res) => {
    try {
        const project = await Project.find({});
        res.status(201).json(project)
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'An error occurred fetching projects',
            error: error.message
        });
    }
}

exports.createProject = async(req, res) => {
    try {
        const project = req.body;
        const createdProject = await Project.create(project)
        res.status(201).json({
            message: 'Project was created successfully',
            project: createdProject
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'An error occurred creating a new project',
            error: error.message
        });
    }
}