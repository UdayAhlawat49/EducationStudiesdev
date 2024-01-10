const express = require('express');
const router = express.Router();
const { collegeListData } = require('../database/mainApp');

router.get('/collegesList', (req, res) => {
  res.render('CollegesList', { collegeListData });
});

module.exports = router;
