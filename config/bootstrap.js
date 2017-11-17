/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(done) {
  
  User.count({
    email: 'admin@example.com'
  }).exec(function (err, existingAdmin) {
    if (err) { return done(err); }

    if (existingAdmin > 0) {
      return done();
    }

    User.create({
      name: 'Admin',
      email: 'admin@example.com',
      password: '123456'
    }).exec(function (err){
      if (err) { return done(err); }
      return done(console.log('\x1b[36m%s\x1b[0m','Created Admin to users table! \n'));
    });
  });

};
