const express = require('express');
const router = express.Router();
const { getAboutMe, createAboutMe } = require('../controllers/aboutme');
const { getContact, createContact } = require('../controllers/contact');
const { getProjects, createProject } = require('../controllers/projects');
const { getRoutes, createRoute } = require('../controllers/routes');
const { getComments, createComment } = require('../controllers/comments');

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

// Comments Routes
// Endpoint: /api/comments
router.get('/comments', getComments);
router.post('/comments', createComment);
// Routes
// Endpoint: /api/routes
router.get('/routes', getRoutes);
router.post('/routes', createRoute);


module.exports = router;