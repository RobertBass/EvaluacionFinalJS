const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

// Connecting to DB
mongoose.connect('mongodb://localhost/estudiantes')
    .then(db => console.log('Db Connected'))
    .catch(err => console.log(err))

// Importing Routes
const indexRoutes = require('./routes/index');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/', indexRoutes);

// Starting Server
app.listen(app.get('port'), () => {
    console.log(`Server on Port ${app.get('port')}`);
});




