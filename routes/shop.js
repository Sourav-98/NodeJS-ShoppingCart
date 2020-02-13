const express = require('express');
const routes = express.Router();

const products = require('./admin').products;

const path = require('path');

routes.use(express.static(path.join(__dirname, '..', 'public')));


routes.get('/', (req, res)=>{
    res.render('shop/home', {pageTitle: "Shop Home", pagePath: "/shop"});
});
routes.get('/prod-list', (req, res)=>{
    res.render('shop/view-products', {pageTitle:"Product List", pagePath:"/shop/prod-list", products: products});
});


module.exports = routes;
