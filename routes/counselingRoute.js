const express = require('express');
const router = express.Router();

// Your other routes

// Route for handling 404 errors
router.get('/counseling', (req, res) => {
  res.render('counseling'); // Assuming you have a 404-not-found.ejs file
});

module.exports = router;
