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
 * Module Vicore.
 */
exports.vicore = function(req, res) {
	res.render('vicore', {
		user: req.user || null
	});
};