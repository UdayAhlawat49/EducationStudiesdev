const express = require('express');
const router = express.Router();
const { collegeListData } = require('../database/mainApp');
const { collegeData } = require('../database/mainApp');

router.get('/collegesList/:category', (req, res) => {
  const category = req.params.category

  const collegeListData =   collegeData.filter((college) => college.category === category );
  const collegeListDataByTag =   collegeData.filter((college) => college.tag === "popular");

 

  res.render('CollegesList', { collegeListData , collegeListDataByTag , category});
});

module.exports = router;
