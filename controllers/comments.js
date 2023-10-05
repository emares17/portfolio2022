const Comments = require('../models/Comments');

exports.getComments = async(req, res) => {
    try {
        const comments = await Comments.find({});
        res.status(201).json(comments)
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'An error occurred fetching comments',
            error: error.message
        });
    }
}

exports.createComment = async(req, res) => {
    try {
        const comment = req.body;
        const createdComment = await Comments.create(comment);
        res.status(201).json({
            message: 'Comment was successfully created',
            comments: createdComment
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'An error occurred creating a new comment',
            error: error.message
        });
    }
}