// mainApp.js

const generateTabLinksData = require('./generateTabLinks');
const collegeData = require('./collegeData');


// Loop through collegeData and generate tabLinksData for each college
const tabLinksDataForAllColleges = collegeData.map((college) => generateTabLinksData(college.collegeCode));

module.exports = {
  collegeData,
  tabLinksDataForAllColleges,

};
