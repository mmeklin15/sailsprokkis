/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
require('sails-hook-flash');
var bcrypt = require('bcrypt');

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
        res.view('user/editpassword');
    },

    updatepassword: function(req, res) {
        var params = req.allParams();
        if(params.newpass.length < 6) {
            req.addFlash('error', 'Salasana on oltava vähintään 6 merkkiä');
            res.redirect('back');
        } else if (params.newpass !== params.confirmpass) {
            req.addFlash('error', 'Salasanan varmistus ei täsmää');
            res.redirect('back');
        }
        
        User.findOne({id:req.session.user.id})
        .exec(function (err, user) {
            if (err) {return res.serverError(err);}
            if (user.verifyPassword(params.oldpass) == true) {
                user.changePassword(params.newpass, function(err, result){
                    if(err) {
                        console.log(err);
                        req.addFlash('error', 'Salasanan vaihdossa tapahtui virhe');
                        res.redirect('/user/edit');
                    }
                });
                req.addFlash('success', 'Salasana vaihdettu');
                res.redirect('/user/edit');
            } else {
                req.addFlash('error', 'Vanha salasana ei täsmännyt');
                res.redirect('back');
            }
        });
    },
};

