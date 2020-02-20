const express = require('express');
const session = require('express-session');
const app = express();

const MongoDBStore = require('connect-mongodb-session')(session);

const store = new MongoDBStore({
    uri: "mongodb://localhost:27017/test?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
    collection: 'sessions'
});

const mongoConnect = require('./util/database').mongoConnect;


const defaultRoutes = require('./routes/default');
const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

const path = require('path');
///const ejs = require('ejs');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public', 'views'));    // to set the 'views' entry as /public/views

/*
app.use((req, res, next)=>{
    console.log(req.path);
    console.log("----------------");
    next();
});*/

//app.use(express.static(path.join(__dirname, 'public'))); // for rendering static content from /public

app.use(session({
    secret: "ShoppingSite",
    resave: false,
    saveUninitialized: false,
    store: store
}));

app.use('/admin', adminRoutes.routes);     // admin page routes
// app.use('/shop', shopRoutes);
// Error 404 Middleware

app.use(defaultRoutes); // default page routes



mongoConnect(client=>{
    console.log(client);
    app.listen(9000);
});
// app.listen(9000);

