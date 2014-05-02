'use strict';

// Module dependencies.
var application_root = __dirname,
	express = require( 'express' ), //Web framework
	path = require( 'path' ), //Utilities for dealing with file paths
	mongoose = require( 'mongoose' ); //MongoDB integration

//Create server
var app = express();

//Connect to database
mongoose.connect( 'mongodb://localhost/hang-with-me_database' );

//Schemas
var User = new mongoose.Schema({
	username: String,
	password: String,
	firstName: String,
	lastName: String,
	phone: String,
	email: String,
	dateOfBirth: Date,
	gender: String,
});

//Models
var UserModel = mongoose.model( 'User', User );

// Configure server
app.configure( function() {
	//parses request body and populates request.body
	app.use( express.bodyParser() );

	//checks request.body for HTTP method overrides
	app.use( express.methodOverride() );

	//perform route lookup based on url and HTTP method
	app.use( app.router );

	//Where to serve static content
	app.use( express.static( path.join( application_root, 'app') ) );

	//Show all errors in development
	app.use( express.errorHandler({ dumpExceptions: true, showStack: true }));
});

// Routes
app.get( '/api', function( request, response ) {
	response.send( 'API is running' );
});

//Get a list of all users
app.get( '/api/users', function( request, response ) {
	return UserModel.find( function( err, users ) {
		if( !err ) {
			return response.send( users );
		} else {
			return console.log( err );
		}
	});
});

//Get a single user by id
app.get( '/api/users/:id', function( request, response ) {
	return UserModel.findById( request.params.id, function( err, user ) {
		if( !err ) {
			return response.send( user );
		} else {
			return console.log( err );
		}
	});
});

//Insert a new user
app.post( '/api/users', function( request, response ) {
	var user = new UserModel({
		releaseDate: request.body.releaseDate,
		username: request.body.username,
    password: request.body.password,
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    phone: request.body.phone,
    email: request.body.email,
    dateOfBirth: request.body.dateOfBirth,
    gender: request.body.gender
	});
	user.save( function( err ) {
		if( !err ) {
			return console.log( 'created' );
		} else {
			return console.log( err );
		}
		return response.send( user );
	});
});

//Update a user
app.put( '/api/users/:id', function( request, response ) {
	console.log( 'Updating user ' + request.body.title );
	return UserModel.findById( request.params.id, function( err, user ) {
		user.releaseDate = request.body.releaseDate,
		user.username = request.body.username,
    user.password = request.body.password,
    user.firstName = request.body.firstName,
    user.lastName = request.body.lastName,
    user.phone = request.body.phone,
    user.email = request.body.email,
    user.dateOfBirth = request.body.dateOfBirth,
    user.gender = request.body.gender


		return user.save( function( err ) {
			if( !err ) {
				console.log( 'user updated' );
			} else {
				console.log( err );
			}
			return response.send( user );
		});
	});
});

//Delete a user
app.delete( '/api/users/:id', function( request, response ) {
	console.log( 'Deleting user with id: ' + request.params.id );
	return UserModel.findById( request.params.id, function( err, user ) {
		return user.remove( function( err ) {
			if( !err ) {
				console.log( 'User removed' );
				return response.send( '' );
			} else {
				console.log( err );
			}
		});
	});
});

//Start server
var port = 4711;
app.listen( port, function() {
	console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
});
