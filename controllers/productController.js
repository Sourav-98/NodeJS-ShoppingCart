const Product = require('../models/product');

exports.post_NewProduct = (req, res)=>{
    var elem = req.body;
    const prod = new Product(elem);
    prod.add();
    res.redirect('/admin');
}

exports.get_NewProduct = (req, res)=>{
    res.render('admin/add-product', {pageTitle: "Add Product", pagePath:"/admin/add-product"});
}

exports.get_ProductList = (req, res)=>{
    //console.log(Product.fetchAll());
    res.render('shop/view-products', {pageTitle:"Product List", pagePath:"/shop/prod-list", products: Product.fetchAll()});
}

exports.get_ManageProducts = (req, res)=>{
    res.render('admin/manage-products', {pageTitle:"Product List", pagePath:"/admin/manage", products: Product.fetchAll()});
}


exports.get_DeleteProduct = (req, res)=>{
    var p_id = req.body.productID;
    console.log(p_id);
    Product.delete(p_id);
    res.redirect('/admin/manage');
}
