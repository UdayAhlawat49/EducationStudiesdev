const express = require('express');
const router = express.Router();
const { courseData,  courseTabLinksDataForAllColleges } = require('../database/mainApp');

router.get("/CourseView/:collegeCode", (req, res) => {
  const collegeCode = req.params.collegeCode;
   // Assuming courseTabLinksDataForAllColleges is the array you provided
   const tabData = courseTabLinksDataForAllColleges.find(
    (collegeTabLinks) => collegeTabLinks.some((tab) => tab.id.includes(collegeCode))
  );
  
  const courseViewData =   courseData.find((college) => college.collegeCode === collegeCode);


  res.render('CourseView', { courseViewData, courseData , tabData ,collegeCode  });
});

module.exports = router;
