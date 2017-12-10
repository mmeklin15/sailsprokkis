// api/policies/authenticated.js

module.exports = function(req, res, next) {
    if(req.session.user) {
        return next();
    } else {
        req.addFlash('error', 'Et ole kirjautunut sisään.');
        return res.redirect('/');
    }
};