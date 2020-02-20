exports.isAuthenticated = (req, res, next)=>{
    if(!req.session.isLoggedIn){
        res.redirect('/login');
    }
    next();
}
