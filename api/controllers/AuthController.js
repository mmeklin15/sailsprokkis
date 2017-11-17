// api/controllers/AuthController.js

var passport = require('passport');

module.exports = {

    login: function (req, res) {
        res.view();
    },
    process: function (req, res) {
        passport.authenticate('local', function (err, user, info) {
            if ((err) || (!user)) {
                return res.send({
                    message: 'login failed'
                });
                res.send(err);
            }
            req.logIn(user, function (err) {
                if (err) res.send(err);
                console.log(user);
                return res.redirect('/');
            });
        })(req, res);
    },

    logout: function (req, res) {
        req.logOut();
        return res.redirect('/');
    }
};

module.exports.blueprints = {
    actions: true,
    rest: true,
    shortcuts: true
};
