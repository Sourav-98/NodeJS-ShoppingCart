const express = require('express');
const routes = express.Router();
const bodyParser = require('body-parser');

const productController = require('../controllers/productController');
//const products = require('./admin').products;

const path = require('path');

routes.use(express.static(path.join(__dirname, '..', 'public')));

routes.get('/', (req, res)=>{
    res.render('shop/home', {pageTitle: "Shop Home", pagePath: "/shop"});
});
routes.get('/prod-list', productController.get_ProductList);

routes.use(bodyParser.urlencoded({extended: true}));

routes.post('/add-to-cart', (req, res)=>{
    console.log(req.body);
    res.redirect('/shop/prod-list');
});


routes.get('/:p_id', productController.get_ProductDetails);

module.exports = routes;
