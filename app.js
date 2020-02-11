const express = require('express');
const app = express();

const defaultRoutes = require('./routes/default');
const adminRoutes = require('./routes/admin');

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(defaultRoutes);
app.use('/admin', adminRoutes);

app.listen(9000);

