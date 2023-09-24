const express = require('express');
const router = express.Router();
const { getAboutMe, createAboutMe } = require('../controllers/aboutme');
const { getContact, createContact } = require('../controllers/contact');

// About Me Routes
// Endpoint: /api/aboutme
router.get('/aboutme', getAboutMe);
router.post('/aboutme', createAboutMe);

// Contact Routes
// Endpoint: /api/contact
router.get('/contact', getContact);
router.post('/contact', createContact);

module.exports = router;