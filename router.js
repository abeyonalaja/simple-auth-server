
const Authentication = require( './controllers/authentication' );

module.exports = function( app ) {
  'use strict';

  app.post( '/signup', Authentication.signup );
};
