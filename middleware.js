module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.origininalUrl;
        req.flash('error', 'You must be signed in');
        return res.redirect('/login');
    }
    next();
}