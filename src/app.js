const express = require('express');
const loger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const indexRoutes = require('./routes/index')

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(loger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use('/', indexRoutes);

// Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
