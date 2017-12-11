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
    }
};

