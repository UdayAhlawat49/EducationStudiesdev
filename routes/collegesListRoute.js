const express = require("express");
const router = express.Router();
const paginate = require("../middlewares/paginationMiddleware");
 
router.get("/collegesList/:category/:page", (req, res) => {
  const category = req.params.category;
  let page = parseInt(req.params.page, 10) || 1;


  //===========================  colleges filter
  const collegeListData = res.locals.collegeDataStore.getCategoryFilteredData(category);
  const collegeListDataByTag = res.locals.collegeDataStore.getPopularColleges();

  //=============================  pagination
  const { paginatedData, totalPages, prevPage, nextPage } = paginate(
    collegeListData,
    page
  );

  res.render("CollegesList", {
    collegeListData: paginatedData,
    collegeListDataByTag,
    category,
    currentPage: page,
    prevPage,
    nextPage,
    totalPages,
  });
});

module.exports = router;
