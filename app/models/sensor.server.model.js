'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	crypto = require('crypto');

/**
 * Sensor Schema
 */
var SensorSchema = new Schema({
	companyCode: {
		type: Number
	},
	vicodeID: {
		type: Number
	},
	sensorID: {
		type: Number
	},
	dataValue: {
		type: Number
	},
	updated: {
		type: Date
	},
	created: {
		type: Date,
		default: Date.now
	},
});

mongoose.model('Sensor', SensorSchema);