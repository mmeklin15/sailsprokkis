/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	edituser: function(req, res) {
        res.view('user/edit');
    },
    
    updateuser: function(req, res) {
        User.update({id: req.session.user.id}, req.body).exec(function(err, user){
            if(err){ return res.serverError(err);}
            req.session.user.name = user[0].name;
            req.session.user.email = user[0].email;
            res.redirect('/');
        });
    }
};

