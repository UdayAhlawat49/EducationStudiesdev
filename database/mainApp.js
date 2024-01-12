// mainApp.js

const generateTabLinksData = require('./generateTabLinks');
const collegeData = require('./collegeData');
const collegeListData = require('./collegeListData');
 


// courses data
const courseGenerateTabLinksData = require('./courseGenerateTabLinks');
const courseData = require('./courseData');
const courseListData = require('./courseListData');

// Loop through collegeData and generate tabLinksData for each college
const tabLinksDataForAllColleges = collegeData.map((college) => generateTabLinksData(college.collegeCode));


// Loop through collegeData and generate tabLinksData for each college
const courseTabLinksDataForAllColleges = courseData.map((college) => courseGenerateTabLinksData(college.collegeCode));

module.exports = {
  collegeData,
  tabLinksDataForAllColleges,
  collegeListData,

  //courses
  courseTabLinksDataForAllColleges,
  courseData,
  courseListData
};
