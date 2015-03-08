'use strict';

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('indexMain', {//Main
		user: req.user || null
	});
};
/**
 * Module Cerberus.
 */
exports.cerberus = function(req, res) {
	res.render('cerberus', {
		user: req.user || null
	});
};