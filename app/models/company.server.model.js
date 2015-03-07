'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	crypto = require('crypto'),
	passport = require('passport');
//var Sensor = mongoose.model('Sensor');


/**
 * A Validation function for local strategy properties
 */
var validateLocalStrategyProperty = function(property) {
	return ((this.provider !== 'local' && !this.updated) || property.length);
};

/**
 * CompanySchema
 */
var CompanySchema = new Schema({
	companyName: {
		type: String,
		trim: true,
		default: '',
		Validation: [validateLocalStrategyProperty, 'Please fill in your company name']
	},

	created: {
		type: Date,
		default: Date.now
	},

	masterAdministrator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},

	administrators: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],

	users: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],

	//sensors: [Sensor],

	logoUrl: {
		type: String,
		trim: true,
		default: 'https://www.vimesys.com/assets/logo.png',
	},

});

mongoose.model('Company', CompanySchema);