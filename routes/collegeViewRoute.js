const express = require('express');
const router = express.Router();
const { collegeData, tabData  , tabLinksDataForAllColleges } = require('../database/mainApp');

router.get("/collegeView/:collegeCode", (req, res) => {
  const collegeCode = req.params.collegeCode;
  res.render('CollegeView', { collegeData, tabLinksDataForAllColleges , collegeCode  });
});

module.exports = router;
