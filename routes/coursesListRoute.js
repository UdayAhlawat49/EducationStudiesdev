const express = require('express');
const router = express.Router();
const { courseListData } = require('../database/mainApp');

router.get('/coursesList', (req, res) => {
  res.render('coursesList', { courseListData });
});

module.exports = router;
