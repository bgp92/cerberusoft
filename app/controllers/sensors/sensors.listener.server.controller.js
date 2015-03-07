'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
	errorHandler = require('../errors'),
	mongoose = require('mongoose'),
	passport = require('passport'),
	Sensor = mongoose.model('Sensor');

/**
 * Signup
 */
exports.logData = function(req, res) {

	// Init Variables
	var sensor = new Sensor(req.body);
	var message = null;

	// Validate data

	// Then save the sensor data 
	sensor.save(function(err) {
		if (err) {
			console.log('Error saving data');
		} else {
			
		}
	});
};

/**
 * Show that the UDP4 is listening
 */

app.get('udpserver').on('listening', function() {
    
    console.log('WACHUINO');
});

// app.get('udpserver').on('listening', function() {
//     var address = module.exports.get('udpserver').address();
//     console.log('UDP server listening ' + address.address + ' : ' + address.port);
// });

// console.warn('asdasdsads');
/**
 * UDP4 Messages Catcher
 */
// server.on("message", function(msg, rinfo){
// 	// every time new data arrives do this
//     // console.log("server got: ... from " + rinfo.address + ":" + rinfo.port);
//     var sensorDataArray = msg.toString().split(',');
//     console.log(msg.toString()); // To test output
// });
