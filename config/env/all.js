'use strict';

module.exports = {
	app: {
		title: 'VIMESYS',
		description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, and Node.js',
		keywords: 'MongoDB, Express, AngularJS, Node.js'
	},
	port: process.env.PORT || 3000,
	udpPort: 6000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.css',
				'public/lib/animate.css/animate.css',
				'public/lib/font-awesome/css/font-awesome.min.css',
				'public/lib/simple-line-icons/css/simple-line-icons.css'
			],
			js: [
				'public/lib/jquery/dist/jquery.min.js',
				'public/lib/jquery_appear/jquery.appear.js',
				'public/lib/d3/d3.js',
				'public/lib/angular/angular.js',
				'public/lib/angular-animate/angular-animate.js', 
				'public/lib/angular-cookies/angular-cookies.js',
				'public/lib/angular-resource/angular-resource.js', 
				'public/lib/angular-sanitize/angular-sanitize.js',
				'public/lib/angular-touch/angular-touch.js', 
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/ngstorage/ngStorage.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/bootstrap/dist/js/bootstrap.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'public/lib/oclazyload/dist/ocLazyLoad.js',
				'public/lib/angular-translate/angular-translate.js',
				'public/lib/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
				'public/lib/angular-translate-storage-coockie/angular-translate-storage-coockie.js',
				'public/lib/angular-translate-storage-local/angular-translate-storage-local.js'
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};