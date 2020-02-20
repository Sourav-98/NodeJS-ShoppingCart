const express = require('express');
const routes = express.Router();
const auth = require('../middlewares/is-auth');
const path = require('path');
const bodyParser = require('body-parser');
//const renderpath = path.join(__dirname, '..', 'public', 'views', 'admin');

const products = [];
const productController = require('../controllers/productController');

routes.use(express.static(path.join(__dirname, '..', 'public')));
routes.use(bodyParser.urlencoded({extended: true}));

routes.get('/', (req, res)=>{
    res.render('admin/home', {pageTitle: "Admin Home", pagePath:'/admin', isLoggedIn: req.session.isLoggedIn});
    //res.sendFile(path.join(renderpath, 'home.html'));
});

routes.get('/add-product', auth.isAuthenticated, productController.get_NewProduct);

routes.post('/add-product', auth.isAuthenticated, productController.post_NewProduct);

routes.get('/prod-list', productController.get_ProductList);

// routes.get('/manage', productController.get_ManageProducts);

// routes.post('/delete', productController.get_DeleteProduct);

routes.use((req, res)=>{
    res.render('includes/body-404', {pageTitle: "404", pagePath:"err404"});
});

module.exports = {
    routes: routes,
    products: products
};
