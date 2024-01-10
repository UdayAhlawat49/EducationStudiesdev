const express = require('express');
const router = express.Router();
const { collegeData, tabData  , tabLinksDataForAllColleges } = require('../database/mainApp');

router.get("/collegeView/:collegeCode", (req, res) => {
  const collegeCode = req.params.collegeCode;
   // Assuming tabLinksDataForAllColleges is the array you provided
   const tabData = tabLinksDataForAllColleges.find(
    (collegeTabLinks) => collegeTabLinks.some((tab) => tab.id.includes(collegeCode))
  );
  
  const collegeViewData =   collegeData.find((college) => college.collegeCode === collegeCode);


  res.render('CollegeView', { collegeViewData, tabData , collegeCode  });
});

module.exports = router;
