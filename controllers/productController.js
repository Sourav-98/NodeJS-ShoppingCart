const Product = require('../models/product');
const bcrypt = require('bcryptjs');


exports.post_NewProduct = (req, res)=>{
    var elem = req.body;
    const prod = new Product(elem);
    prod.add()
    .then( prod =>{
        console.log(prod);
        res.redirect('/admin');
    })
    .catch(err=>{
        // console.log(err);
        next(error)
    });
}

// app.use(error,req, res, next) => {
//     res.rende
// }

exports.get_NewProduct = (req, res)=>{    
    res.render('admin/add-product', {pageTitle: "Add Product", pagePath:"/admin/add-product", isLoggedIn: req.session.isLoggedIn});
}

exports.get_ProductList = (req, res)=>{
    // console.log('Products Received'+ Product.fetchAll(), typeof(Product.fetchAll()));
    Product.fetchAll()
    .then((products)=>{
        res.render('shop/view-products', {pageTitle:"Product List", pagePath:"/admin/prod-list", products: products, isLoggedIn: req.session.isLoggedIn});
    })
    .catch((err)=> {
        console.log(err);
    });
    
}


// exports.get_ManageProducts = (req, res)=>{
//     res.render('shop/view-products', {pageTitle:"Product List", pagePath:"/admin/manage", products: Product.fetchAll()});
//     //res.render('admin/manage-products', {pageTitle:"Product List", pagePath:"/admin/manage", products: Product.fetchAll()});
// }

// exports.get_DeleteProduct = (req, res)=>{
//     var p_id = req.body.productID;
//     console.log(p_id);
//     Product.delete(p_id);
//     res.redirect('/admin/manage');
// }

// exports.get_ProductDetails = (req, res)=>{
//     console.log(req.params.p_id);
//     var product = Product.fetch(req.params.p_id);
//     //console.log(product);
//     res.render('shop/product-details', {pageTitle: product.productName, pagePath:"/shop", product: product});
// }
