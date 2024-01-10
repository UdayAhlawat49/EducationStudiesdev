const express = require('express');
const router = express.Router();

router.get('/abroad', (req, res) => {
  res.render('abroad');
});

module.exports = router;
