const express = require('express');
const app = express();


const defaultRoutes = require('./routes/default');
const adminRoutes = require('./routes/admin');

const path = require('path');
const ejs = require('ejs');

app.set('views', path.join(__dirname, 'public', 'views'))    // to set the 'views' entry as /public/views
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public'))); // for rendering static content from /public
app.use(defaultRoutes); // default page routes
app.use('/admin', adminRoutes);     // admin page routes
// Error 404 Middleware
app.use((req, res)=>{
    res.render('includes/body-404', {pageTitle: "404", pagePath:"err404"});
});

app.listen(9000);

