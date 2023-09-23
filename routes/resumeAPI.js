const express = require('express');
const router = express.Router();
const { getAboutMe, createAboutMe } = require('../controllers/aboutme');

router.get('/aboutme', getAboutMe);
router.post('/aboutme', createAboutMe);

module.exports = router;