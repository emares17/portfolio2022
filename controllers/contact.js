const Contact = require('../models/Contact');

exports.getContact = async(req, res) => {
    try {
        const contact = await Contact.find({});
        res.json(contact);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'An error occurred while fetching contact information',
            error: error.message
        });
    }
}

exports.createContact = async(req, res) => {
    try {
        const contact = req.body;
        const createdContact = await Contact.create(contact);
        res.status(201).json({
            message: 'Contact was created successfully',
            contact: createdContact
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'An error occurred while creating a contact',
            error: error.message
        });
    }
}