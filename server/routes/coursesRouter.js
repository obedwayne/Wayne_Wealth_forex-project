const express = require('express');
const { getAllCourses } = require('../controllers/coursesController');

const router = express.Router();

router.route('/api/v1/courses').get(getAllCourses);

module.exports = router;
