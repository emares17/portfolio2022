const express = require('express');
const router = express.Router();
const { getAboutMe, createAboutMe } = require('../controllers/aboutme');
const { getContact, createContact } = require('../controllers/contact');
const { getProjects, createProject } = require('../controllers/projects');

// About Me Routes
// Endpoint: /api/aboutme
router.get('/aboutme', getAboutMe);
router.post('/aboutme', createAboutMe);

// Contact Routes
// Endpoint: /api/contact
router.get('/contact', getContact);
router.post('/contact', createContact);

// Projects Routes
// Endpoint: /api/projects
router.get('/projects', getProjects);
router.post('/projects', createProject);

module.exports = router;