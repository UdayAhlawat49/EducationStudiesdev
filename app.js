const express = require('express');
const ejs = require('ejs');
const path = require('path');
 const   collegeData   = require('./database/collegeData'); // Adjust the path accordingly
 const collegeDataStore = require("./database/collegeDataStore");


const app = express();
 
app.use((req, res, next) => {
  res.locals.collegeData = collegeData;
  res.locals.collegeDataStore = collegeDataStore;
  next();
});

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Import route files
const indexRoute = require('./routes/indexRoute');
const collegesListRoute = require('./routes/collegesListRoute');
const coursesListRoute = require('./routes/coursesListRoute');
const collegeViewRoute = require('./routes/collegeViewRoute');
const aboutRoute = require('./routes/aboutRoute');
const contactRoute = require('./routes/contactRoute');
const abroadRoute = require('./routes/abroadRoute');
const counselingRoute = require('./routes/counselingRoute');
const coursesViewRoute = require('./routes/coursesViewRoute');
const notfoundRoute = require('./routes/notfoundRoute');

// Use routes
app.use('/', indexRoute);
app.use('/', collegesListRoute);
app.use('/', collegeViewRoute);
app.use('/', aboutRoute);
app.use('/', contactRoute);
app.use('/', abroadRoute);
app.use('/', counselingRoute);
app.use('/', coursesListRoute);
app.use('/', coursesViewRoute);
app.use('/', notfoundRoute);


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
