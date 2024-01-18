// collegeDataStore.js

const { collegeData } = require("../database/mainApp");


//  college by category 
const getCategoryFilteredData = (category) => {
  return collegeData.filter((college) => college.category === category);
};

//  college by popularity 
const getPopularColleges = () => {
  return collegeData.filter((college) => college.tag === "popular");
};

module.exports = {
  getCategoryFilteredData,
  getPopularColleges,
};
