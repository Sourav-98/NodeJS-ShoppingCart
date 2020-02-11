const express = require('express');
const routes = express.Router();

const path = require('path');

const renderpath = path.join(__dirname, '..', 'public', 'views', 'admin');

routes.get('/', (req, res)=>{
    res.sendFile(path.join(renderpath, 'home.html'));
});

module.exports = routes;
