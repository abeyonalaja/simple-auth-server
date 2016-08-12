
const User = require('../models/user');

exports.signup = function( req, res, next ){
  'use strict';

  const email = req.body.email;
  const password = req.body.password;

  if( !email || !password ) {
    return res.status( 422 ).send( 'you must provide an email and password.' ); 
  }

  // See iff a user with the given email exists
  User.findOne( { email : email }, function( err, existingUser) {
    if( err ) { return next( err); }

    // If a user with email does exists, return an error
    if( existingUser ) {
      return res.status( 422 ).send( { error : 'Email is in use' } );
    }

    // If a suer with email does NOT exist, create and save user record
    const user = new User({
      email : email,
      password : password
    });

    user.save( function( err ) {

      if( err ) { return next( err ); }

      res.json(user);
    });

  });



  // Respond to request indicating the user was created

};
