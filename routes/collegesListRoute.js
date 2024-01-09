const express = require('express');
const router = express.Router();
const { collegeData } = require('../database/mainApp');

router.get('/collegesList', (req, res) => {
  res.render('CollegesList', { collegeData });
});

module.exports = router;
