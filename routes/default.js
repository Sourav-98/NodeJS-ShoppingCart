const express = require('express');
const routes = express.Router();



const path = require('path');

//const renderpath = path.join(__dirname, '..', 'public', 'views');

routes.use(express.static(path.join(__dirname, '..', 'public')));

routes.get('/', (req, res)=>{
    res.render('index', {pageTitle: "Home", pagePath: "/", isLoggedIn: req.session.isLoggedIn});
    //res.sendFile(path.join(renderpath, 'index.html'));
});

routes.get('/login', (req, res)=>{
    res.render('auth/login', {pageTitle: "Login", pagePath: "/login", isLoggedIn: req.session.isLoggedIn});
});


routes.post('/login', (req, res)=>{
    req.session.isLoggedIn = true;
    res.redirect('/');
})

routes.get('/logout', (req, res)=>{
    req.session.destroy();
    res.redirect('/');
});
//Error 404 Middleware
routes.use((req, res)=>{
    res.render('includes/body-404', {pageTitle: "404", pagePath:"err404", isLoggedIn: req.session.isLoggedIn});
});

module.exports = routes;
