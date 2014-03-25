// Module dependencies.
var application_root = __dirname,
    express = require( 'express' ), //Web framework
    path = require( 'path' ), //Utilities for dealing with file paths
    mongoose = require( 'mongoose' ); //MongoDB integration

mongoose.connect( 'mongodb://' + process.env.MONGOU + ':' + process.env.MONGOP + '@' + process.env.MONGOURL );

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

// Configure server
app.configure( function() {
    //parses request body and populates request.body
    app.use( express.bodyParser() );

    //checks request.body for HTTP method overrides
    app.use( express.methodOverride() );

    //perform route lookup based on url and HTTP method
    app.use( app.router );

    //Where to serve static content
    app.use( express.static( path.join( application_root) ) );

    //Show all errors in development
    app.use( express.errorHandler({ dumpExceptions: true, showStack: true }));
});

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





