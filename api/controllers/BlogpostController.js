/**
 * BlogpostController
 *
 * @description :: Server-side logic for managing Blogposts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
require('sails-hook-flash');
module.exports = {
	new: function(req, res) {
        res.view('blogposts/new');
    },

    save: function(req, res) {
        Blogpost.create(req.body).exec(function (err, blogpost){
            if (err) { return res.serverError(err); }

            sails.log('Saved post with id:', blogpost.id);
            req.addFlash('success', 'Kirjoitus tallennettu');
            res.redirect('/');
        });
    },

    archive: function(req, res) {
        Blogpost.find({sort:'createdAt DESC'}).exec(function(err, blogposts){
            if (err) { return res.serverError(err); }

            res.view('blogposts/archive', {
                posts: blogposts
            });
        });
    },

    edit: function(req, res) {
        Blogpost.findOne({id:req.query.id}).exec(function(err, blogpost){
            if (err) { return res.serverError(err); }
            sails.log(req.query);
            sails.log(blogpost);
            if (blogpost == undefined) { 
                req.addFlash('error', 'Kirjoitusta ei löydy');
                res.redirect('/blogpost/archive'); 
            }
            res.view('blogposts/edit', {
                post:blogpost
            });
        });
    },

	update: function(req, res) {
        Blogpost.update({id: req.body.id},req.body).exec(function(err, blogpost){
            if (err) { return res.serverError(err); }
            if(blogpost == undefined) {
                req.addFlash('error','Kirjoitusta ei voitu päivittää');
                req.redirect('/');
            }
            req.addFlash('success', 'Kirjoitus päivitetty!');
			res.redirect('/blogpost/archive');
        });
    },

		destroy: function(req, res) {
				console.log(req.query);
        Blogpost.destroy({id:req.query.id}).exec(function (err, blogpost){
            if (err) { return res.serverError(err); }

            sails.log('Deleted post with id:', blogpost.id);
            req.addFlash('success', 'Kirjoitus poistettu.');
            res.redirect('/');
        });
    }
};
