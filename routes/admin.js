const express = require('express');
const routes = express.Router();

const path = require('path');

const renderpath = path.join(__dirname, '..', 'public', 'views', 'admin');

routes.get('/', (req, res)=>{

    res.render('admin/home', {pageTitle: "Admin Home", pagePath:'/admin'});
    //res.sendFile(path.join(renderpath, 'home.html'));
});

module.exports = routes;
