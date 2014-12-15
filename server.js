// Module dependencies.
var application_root = __dirname,
    express = require( 'express' ), //Web framework
    path = require( 'path' ), //Utilities for dealing with file paths
    bodyParser = require('body-parser'),
    serveStatic = require('serve-static'),
    errorHandler = require('errorhandler'),
    morgan = require('morgan'),
    mongoose = require( 'mongoose' ); //MongoDB integration

mongoose.connect( 'mongodb://' + process.env.MONGO_USER + ':' + process.env.MONGO_PASS + '@' + process.env.MONGO_URL + '/' + process.env.MONGO_DB );

//Schemas
var Post = new mongoose.Schema({
    _id: Number,
    title: String,
    post_content: String,
    snippets: String,
    tags: [ String ],
    creationDate: Date,
    author: String,
    complete: Boolean
});

//Models
var PostModel = mongoose.model( 'Post', Post );

//Create server
var app = express();

//parses request body and populates request.body
app.use( bodyParser.json() );

//Where to serve static content
app.use( serveStatic( path.join( application_root) ) );

//Show all errors in development
app.use( errorHandler() );

// Log activity
app.use( morgan('combined') );

//Start server
var port = 3000;
app.listen( port, function() {
    console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
});

// get all of the posts
app.get( '/posts', function( request, response ) {
    console.log("Client request posts");
    return PostModel.find( { complete: true }, function( err, posts ) {
        if( !err ) {
            var pkg = { "posts": posts }
            return response.send( pkg );
        } else {
            return console.log( err );
        }
    });
});





