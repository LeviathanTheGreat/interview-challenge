const express = require('express');

const xss = require('xss-clean');
const compression = require('compression');
const cors = require('cors');

const httpStatus = require('http-status');

const routes = require('./routes/user');
const path = require('path')


const app = express();





// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());


// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());

//serving home page
app.use( express.static( path.join(__dirname, '..', 'web') ))
app.get('/', (req, res) => {
    // src\web\public\index.html
    res.sendFile('web/public/index.html', {root: __dirname })
});


// v1 api routes
app.use('/api', routes);






module.exports = app;