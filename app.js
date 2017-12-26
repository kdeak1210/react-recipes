const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('client-sessions');
const logger = require('morgan');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const Promise = require('bluebird')
require('dotenv').config();

const app = express();

// Connect to MongoDB via Mongoose ODM (use env variable for mongo URL)
mongoose.Promise = Promise; // fix deprecation warning
mongoose.connect(process.env.MONGO_URL, {useMongoClient: true}, (err) => {
  if (err){
    console.log('Failer to connect to MongoDB');
    return;
  }

  console.log('Connected to MongoDB...');
})

// Middleware Config  (client-sessions must be after cookies)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  cookieName: 'session',
  secret: process.env.SESSION_SECRET,
  duration: 24*60*60*1000, // 1 day
  activeDuration: 30*60*1000
}));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// Handlebars Templating Engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routes
app.use('/', require('./routes/index'));
app.use('/api', require('./routes/api'));
app.use('/account', require('./routes/account'));

// Catch-All route renders the React App for Front-End routing to take over
app.get('*', (req, res) => {
  res.render('index', null);
});

// Listen on PORT (env var OR 3000 if none)
const port = process.env.PORT || 3000;
app.listen(port, (err) => {
  if (err){
    console.log(`Couldn't connect to port ${port}`);
    return;
  }

  console.log(`Listening on port ${port}...`)
})
