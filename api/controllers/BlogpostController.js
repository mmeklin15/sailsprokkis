/**
 * BlogpostController
 *
 * @description :: Server-side logic for managing Blogposts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	new: function(req, res) {
        res.view('blogposts/new');
    },

    save: function(req, res) {
        Blogpost.create(req.body).exec(function (err, blogpost){
            if (err) { return res.serverError(err); }
          
            sails.log('Saved post with id:', blogpost.id);
            res.view('blogposts/new');
        });
    }
};

