const express = require('express');
const router = express.Router();
const { collegeListData } = require('../database/mainApp');

router.get('/coursesList', (req, res) => {
  res.render('coursesList', { collegeListData });
});

module.exports = router;
