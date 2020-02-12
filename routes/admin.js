const express = require('express');
const routes = express.Router();

const path = require('path');
const bodyParser = require('body-parser');
//const renderpath = path.join(__dirname, '..', 'public', 'views', 'admin');

const products = [];

routes.use(express.static(path.join(__dirname, '..', 'public')));
routes.use(bodyParser.urlencoded({extended: true}));

routes.get('/', (req, res)=>{
    res.render('admin/home', {pageTitle: "Admin Home", pagePath:'/admin'});
    //res.sendFile(path.join(renderpath, 'home.html'));
});

routes.get('/add-product', (req, res)=>{
    res.render('admin/add-product', {pageTitle: "Add Product", pagePath:"/admin/add-product"});
});

routes.post('/add-product', (req, res)=>{
    console.log(req.body);
    var elem = req.body.productName.trim();
    if(elem.length!==0){
        products.push(req.body.productName);
    }
    console.log(products);
    res.redirect('/admin');
});

routes.use((req, res)=>{
    res.render('includes/body-404', {pageTitle: "404", pagePath:"err404"});
});

module.exports = {
    routes: routes,
    products: products
};
