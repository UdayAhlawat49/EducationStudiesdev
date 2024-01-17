const express = require("express");
const router = express.Router();
const { collegeListData } = require("../database/mainApp");
const { collegeData } = require("../database/mainApp");

router.get("/collegesList/:category/:page", (req, res) => {
  const category = req.params.category;

  const collegeListData = collegeData.filter(
    (college) => college.category === category
  );
  const collegeListDataByTag = collegeData.filter(
    (college) => college.tag === "popular"
  );

  let page = parseInt(req.params.page, 10) || 1; // Get the page parameter from the query, default to page 1
  //console.log("req.queryy", req.params.page);
  const itemsPerPage = 2; // Set the number of items per page

  // Calculate startIndex and endIndex for pagination
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // Slice the array based on the current page
  const paginatedColleges = collegeListData.slice(startIndex, endIndex);
  // Calculate total pages
  const totalPages = Math.ceil(collegeListData.length / itemsPerPage);

  //console.log("server currentPage", page);
  //console.log("startIndex", startIndex);
  //console.log("endIndex", endIndex);
  //console.log("paginatedColleges", paginatedColleges);
  let prevPage = Math.max(page - 1, 1); // Ensure prevPage is at least 1
  let nextPage = Math.min(page + 1, totalPages); // Ensure nextPage is at most totalPages

  //console.log("nextPagen", nextPage);
  res.render("CollegesList", {
    collegeListData: paginatedColleges,
    collegeListDataByTag,
    category,
    currentPage: page,
    prevPage,
    nextPage,
    totalPages,
  });
});

module.exports = router;
