const express = require('express');
const router = express.Router();

// Your other routes

// Route for handling 404 errors
router.get('*', (req, res) => {
  res.status(404).render('404-not-found'); // Assuming you have a 404-not-found.ejs file
});

module.exports = router;
