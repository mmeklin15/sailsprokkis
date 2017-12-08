/**
 * MainController
 *
 * @description :: Server-side logic for managing Main
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	home: function(req, res) {
        var postsQ = Blogpost.find().exec(function afterFind(err, blogposts) {
            if (err) {return res.serverError(err);}
            res.view('homepage', {
                    posts: blogposts
                }
            );
        });
    }
};

