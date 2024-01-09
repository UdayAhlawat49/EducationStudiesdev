const express = require('express');
const ejs = require('ejs');
const path = require('path');
 
const app = express();

 
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Import route files
const indexRoute = require('./routes/indexRoute');
const collegesListRoute = require('./routes/collegesListRoute');
const collegeViewRoute = require('./routes/collegeViewRoute');
const aboutRoute = require('./routes/aboutRoute');
const contactRoute = require('./routes/contactRoute');

// Use routes
app.use('/', indexRoute);
app.use('/', collegesListRoute);
app.use('/', collegeViewRoute);
app.use('/', aboutRoute);
app.use('/', contactRoute);


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});