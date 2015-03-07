'use strict';
/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	init = require('./config/init')(),
	config = require('./config/config');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Bootstrap db connection
var db = mongoose.connect(config.db, function(err) {
	if (err) {
		console.error('\x1b[31m', 'Could not connect to MongoDB!');
		console.log(err);
	}
});

// Init the express application
var app = require('./config/express')(db);

// Bootstrap passport config
require('./config/passport')();

// Start the app by listening on <port>
app.get('server').listen(config.port);

// Start the udpServer by listening on <port>
app.get('udpserver').bind(config.udpPort);

// Expose app
exports = module.exports = app;

// Logging initialization
console.log('Vimesys application started on port ' + config.port);

app.get('udpserver').on('listening', function() {
    var address = module.exports.get('udpserver').address();
    console.log('UDP server listening ' + address.address + ' : ' + address.port);
});

app.get('udpserver').on('message', function(msg, rinfo){
	// every time new data arrives do this
    // console.log("server got: ... from " + rinfo.address + ":" + rinfo.port);
    var sensorDataArray = msg.toString().split(',');
    console.log(msg.toString()); // To test output
});

//Bootstrap models
var models_path = __dirname + '/app/models';
