const express = require('express');
const routes = express.Router();

const path = require('path');

//const renderpath = path.join(__dirname, '..', 'public', 'views');


routes.use(express.static(path.join(__dirname, '..', 'public')));

routes.get('/', (req, res)=>{
    res.render('index', {pageTitle: "Home", pagePath: "/"});
    //res.sendFile(path.join(renderpath, 'index.html'));
});
//Error 404 Middleware
routes.use((req, res)=>{
    res.render('includes/body-404', {pageTitle: "404", pagePath:"err404"});
});

module.exports = routes;
