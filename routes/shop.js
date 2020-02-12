const express = require('express');
const routes = express.Router();

const products = require('./admin').products;

const path = require('path');

routes.use(express.static(path.join(__dirname, '..', 'public')));


routes.get('/prod-list', (req, res)=>{
    res.render('products/view-products', {pageTitle:"Product List", pagePath:"/shop", products: products});
});


module.exports = routes;
