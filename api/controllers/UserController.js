/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
require('sails-hook-flash');

module.exports = {
	edituser: function(req, res) {
        res.view('user/edit');
    },
    
    updateuser: function(req, res) {
        User.update({id: req.session.user.id}, req.body).exec(function(err, user){
            if(err){ return res.serverError(err);}
            req.session.user.name = user[0].name;
            req.session.user.email = user[0].email;
            req.addFlash('success', 'Käyttäjätiedot päivitetty.');
            res.redirect('/');
        });
    },

    editpassword: function(req, res) {
        res.view('password/edit');
    },

    updatepassword: function(req, res) {
        User.update({id: req.session.user.id}, {password: req.body.newpass }).exec(function(err, user){
            if(err){ return res.serverError(err);}
            res.redirect('/');
        });
    },
};

