'use strict';

angular.module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngStorage',
    'ui.router',
    'ui.bootstrap',
    'ui.utils',
    'ui.load',
    'ui.jq',
    'oc.lazyLoad',
    'pascalprecht.translate'
]);
// config

var app =  
angular.module('app')
  .config(
    [        '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
    function ($controllerProvider,   $compileProvider,   $filterProvider,   $provide) {
        
        // lazy controller, directive and service
        app.controller = $controllerProvider.register;
        app.directive  = $compileProvider.directive;
        app.filter     = $filterProvider.register;
        app.factory    = $provide.factory;
        app.service    = $provide.service;
        app.constant   = $provide.constant;
        app.value      = $provide.value;
    }
  ])
  .config(['$translateProvider', function($translateProvider){
    // Register a loader for the static files
    // So, the module will search missing translation tables under the specified urls.
    // Those urls are [prefix][langKey][suffix].
    $translateProvider.useStaticFilesLoader({
      prefix: '/modules/core/l10n/',
      suffix: '.js'
    });
    // // Tell the module what language to use by default
    $translateProvider.preferredLanguage('es');
    // // Tell the module to store the language in the local storage
    //LOCAL STORAGE NOT WORKING!!!
    //$translateProvider.useLocalStorage();
  }]);

// lazyload config

angular.module('app')
    /**
   * jQuery plugin config use ui-jq directive , config the js and css files that required
   * key: function name of the jQuery plugin
   * value: array of the css js file located
   */
  .constant('JQ_CONFIG', {
      easyPieChart:   [   '/lib/jquery.easy-pie-chart/dist/jquery.easypiechart.fill.js'],
      sparkline:      [   '/lib/jquery.sparkline/dist/jquery.sparkline.retina.js'],
      plot:           [   '/lib/flot/jquery.flot.js',
                          '/lib/flot/jquery.flot.pie.js', 
                          '/lib/flot/jquery.flot.resize.js',
                          '/lib/flot.tooltip/js/jquery.flot.tooltip.js',
                          '/lib/flot.orderbars/js/jquery.flot.orderBars.js',
                          '/lib/flot-spline/js/jquery.flot.spline.js'],
      moment:         [   '/lib/moment/moment.js'],
      screenfull:     [   '/lib/screenfull/dist/screenfull.min.js'],
      slimScroll:     [   '/lib/slimscroll/jquery.slimscroll.min.js'],
      sortable:       [   '/lib/html5sortable/jquery.sortable.js'],
      nestable:       [   '/lib/nestable/jquery.nestable.js',
                          '/lib/nestable/jquery.nestable.css'],
      filestyle:      [   '/lib/bootstrap-filestyle/src/bootstrap-filestyle.js'],
      slider:         [   '/lib/bootstrap-slider/bootstrap-slider.js',
                          '/lib/bootstrap-slider/bootstrap-slider.css'],
      chosen:         [   '/lib/chosen/chosen.jquery.min.js',
                          '/lib/bootstrap-chosen/bootstrap-chosen.css'],
      TouchSpin:      [   '/lib/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js',
                          '/lib/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css'],
      wysiwyg:        [   '/lib/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
                          '/lib/bootstrap-wysiwyg/external/jquery.hotkeys.js'],
      dataTable:      [   '/lib/datatables/media/js/jquery.dataTables.min.js',
                          '/lib/plugins/integration/bootstrap/3/dataTables.bootstrap.js',
                          '/lib/plugins/integration/bootstrap/3/dataTables.bootstrap.css'],
      vectorMap:      [   '/lib/bower-jvectormap/jquery-jvectormap-1.2.2.min.js', 
                          '/lib/bower-jvectormap/jquery-jvectormap-world-mill-en.js',
                          '/lib/bower-jvectormap/jquery-jvectormap-us-aea-en.js',
                          '/lib/bower-jvectormap/jquery-jvectormap-1.2.2.css'],
      footable:       [   '/lib/footable/dist/footable.all.min.js',
                          '/lib/footable/css/footable.core.css'],
      fullcalendar:   [   '/lib/moment/moment.js',
                          '/lib/fullcalendar/dist/fullcalendar.min.js',
                          '/lib/fullcalendar/dist/fullcalendar.css',
                          '/lib/fullcalendar/dist/fullcalendar.theme.css'],
      daterangepicker:[   '/lib/moment/moment.js',
                          '/lib/bootstrap-daterangepicker/daterangepicker.js',
                          '/lib/bootstrap-daterangepicker/daterangepicker-bs3.css'],
      tagsinput:      [   '/lib/bootstrap-tagsinput/dist/bootstrap-tagsinput.js',
                          '/lib/bootstrap-tagsinput/dist/bootstrap-tagsinput.css']
                      
    }
  )
  // oclazyload config
  .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
      // We configure ocLazyLoad to use the lib script.js as the async loader
      $ocLazyLoadProvider.config({
          debug:  true,
          events: true,
          modules: [
              {
                  name: 'ngGrid',
                  files: [
                      '/lib/ng-grid/build/ng-grid.min.js',
                      '/lib/ng-grid/ng-grid.min.css',
                      '/lib/ng-grid/ng-grid.bootstrap.css'
                  ]
              },
              {
                  name: 'ui.grid',
                  files: [
                      '/lib/angular-ui-grid/ui-grid.min.js',
                      '/lib/angular-ui-grid/ui-grid.min.css',
                      '/lib/angular-ui-grid/ui-grid.bootstrap.css'
                  ]
              },
              {
                  name: 'ui.select',
                  files: [
                      '/lib/angular-ui-select/dist/select.min.js',
                      '/lib/angular-ui-select/dist/select.min.css'
                  ]
              },
              {
                  name:'angularFileUpload',
                  files: [
                    '/lib/angular-file-upload/angular-file-upload.min.js'
                  ]
              },
              {
                  name:'ui.calendar',
                  files: ['/lib/angular-ui-calendar/src/calendar.js']
              },
              {
                  name: 'ngImgCrop',
                  files: [
                      '/lib/ngImgCrop/compile/minified/ng-img-crop.js',
                      '/lib/ngImgCrop/compile/minified/ng-img-crop.css'
                  ]
              },
              {
                  name: 'angularBootstrapNavTree',
                  files: [
                      '/lib/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
                      '/lib/angular-bootstrap-nav-tree/dist/abn_tree.css'
                  ]
              },
              {
                  name: 'toaster',
                  files: [
                      '/lib/angularjs-toaster/toaster.js',
                      '/lib/angularjs-toaster/toaster.css'
                  ]
              },
              {
                  name: 'textAngular',
                  files: [
                      '/lib/textAngular/dist/textAngular-sanitize.min.js',
                      '/lib/textAngular/dist/textAngular.min.js'
                  ]
              },
              {
                  name: 'vr.directives.slider',
                  files: [
                      '/lib/venturocket-angular-slider/build/angular-slider.min.js',
                      '/lib/venturocket-angular-slider/build/angular-slider.css'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular',
                  files: [
                      '/lib/videogular/videogular.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.controls',
                  files: [
                      '/lib/videogular-controls/controls.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.buffering',
                  files: [
                      '/lib/videogular-buffering/buffering.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.overlayplay',
                  files: [
                      '/lib/videogular-overlay-play/overlay-play.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.poster',
                  files: [
                      '/lib/videogular-poster/poster.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.imaads',
                  files: [
                      '/lib/videogular-ima-ads/ima-ads.min.js'
                  ]
              },
              {
                  name: 'xeditable',
                  files: [
                      '/lib/angular-xeditable/dist/js/xeditable.min.js',
                      '/lib/angular-xeditable/dist/css/xeditable.css'
                  ]
              },
              {
                  name: 'smart-table',
                  files: [
                      '/lib/angular-smart-table/dist/smart-table.min.js'
                  ]
              }
          ]
      });
  }])
;

/**
 * Config for the router
 */
angular.module('app')
  .run(
    [          '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;        
      }
    ]
  )
  .config(
    [          '$stateProvider', '$urlRouterProvider', 'JQ_CONFIG', 
      function ($stateProvider,   $urlRouterProvider, JQ_CONFIG) {
          
          $urlRouterProvider
              .otherwise('/app/dashboard-v1');
          $stateProvider
              .state('app', {
                  abstract: true,
                  url: '/app',
                  templateUrl: '/modules/core/views/app.html'
              })
              .state('app.dashboard-v1', {
                  url: '/dashboard-v1',
                  templateUrl: '/modules/core/views/app_dashboard_v1.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['/modules/core/controllers/controllers/chart.js']);
                    }]
                  }
              })
              .state('app.dashboard-v2', {
                  url: '/dashboard-v2',
                  templateUrl: '/modules/core/views/app_dashboard_v2.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['/modules/core/controllers/controllers/chart.js']);
                    }]
                  }
              })
              .state('app.temperature', {
                  url: '/temperature',
                  templateUrl: '/modules/core/views/temperature.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad){
                          return uiLoad.load(['/modules/core/controllers/controllers/chart.js',
                                              '/modules/core/controllers/controllers/gauge.js']);
                      }]
                  }
              })
              .state('app.moisture', {
                  url: '/moisture',
                  templateUrl: '/modules/core/views/moisture.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad){
                          return uiLoad.load(['/modules/core/controllers/controllers/chart.js',
                                              '/modules/core/controllers/controllers/gauge.js']);
                      }]
                  }
              })
              .state('app.pressure', {
                  url: '/pressure',
                  templateUrl: '/modules/core/views/pressure.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad){
                          return uiLoad.load(['/modules/core/controllers/controllers/chart.js',
                                              '/modules/core/controllers/controllers/gauge.js']);
                      }]
                  }
              })
              .state('app.ui', {
                  url: '/ui',
                  template: '<div ui-view class="fade-in-up"></div>'
              })
              .state('app.ui.buttons', {
                  url: '/buttons',
                  templateUrl: '/modules/core/views/ui_buttons.html'
              })
              .state('app.ui.icons', {
                  url: '/icons',
                  templateUrl: '/modules/core/views/ui_icons.html'
              })
              .state('app.ui.grid', {
                  url: '/grid',
                  templateUrl: '/modules/core/views/ui_grid.html'
              })
              .state('app.ui.widgets', {
                  url: '/widgets',
                  templateUrl: '/modules/core/views/ui_widgets.html'
              })          
              .state('app.ui.bootstrap', {
                  url: '/bootstrap',
                  templateUrl: '/modules/core/views/ui_bootstrap.html'
              })
              .state('app.ui.sortable', {
                  url: '/sortable',
                  templateUrl: '/modules/core/views/ui_sortable.html'
              })
              .state('app.ui.scroll', {
                  url: '/scroll',
                  templateUrl: '/modules/core/views/ui_scroll.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad){
                          return uiLoad.load('/modules/core/controllers/controllers/scroll.js');
                      }]
                  }
              })
              .state('app.ui.portlet', {
                  url: '/portlet',
                  templateUrl: '/modules/core/views/ui_portlet.html'
              })
              .state('app.ui.timeline', {
                  url: '/timeline',
                  templateUrl: '/modules/core/views/ui_timeline.html'
              })
              .state('app.ui.tree', {
                  url: '/tree',
                  templateUrl: '/modules/core/views/ui_tree.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load('angularBootstrapNavTree').then(
                              function(){
                                 return $ocLazyLoad.load('/modules/core/controllers/controllers/tree.js');
                              }
                          );
                        }
                      ]
                  }
              })
              .state('app.ui.toaster', {
                  url: '/toaster',
                  templateUrl: '/modules/core/views/ui_toaster.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad){
                          return $ocLazyLoad.load('toaster').then(
                              function(){
                                 return $ocLazyLoad.load('/modules/core/controllers/controllers/toaster.js');
                              }
                          );
                      }]
                  }
              })
              .state('app.ui.jvectormap', {
                  url: '/jvectormap',
                  templateUrl: '/modules/core/views/ui_jvectormap.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad){
                          return $ocLazyLoad.load('/modules/core/controllers/controllers/vectormap.js');
                      }]
                  }
              })
              .state('app.ui.googlemap', {
                  url: '/googlemap',
                  templateUrl: '/modules/core/views/ui_googlemap.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( [
                            '/modules/core/controllers/app/map/load-google-maps.js',
                            '/modules/core/controllers/app/map/ui-map.js',
                            '/modules/core/controllers/app/map/map.js'] ).then(
                              function(){
                                return loadGoogleMaps(); 
                              }
                            );
                      }]
                  }
              })
              .state('app.chart', {
                  url: '/chart',
                  templateUrl: '/modules/core/views/ui_chart.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad){
                          return uiLoad.load('/modules/core/controllers/controllers/chart.js');
                      }]
                  }
              })
              // table
              .state('app.table', {
                  url: '/table',
                  template: '<div ui-view></div>'
              })
              .state('app.table.static', {
                  url: '/static',
                  templateUrl: '/modules/core/views/table_static.html'
              })
              .state('app.table.datatable', {
                  url: '/datatable',
                  templateUrl: '/modules/core/views/table_datatable.html'
              })
              .state('app.table.footable', {
                  url: '/footable',
                  templateUrl: '/modules/core/views/table_footable.html'
              })
              .state('app.table.grid', {
                  url: '/grid',
                  templateUrl: '/modules/core/views/table_grid.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load('ngGrid').then(
                              function(){
                                  return $ocLazyLoad.load('/modules/core/controllers/controllers/grid.js');
                              }
                          );
                      }]
                  }
              })
              .state('app.table.uigrid', {
                  url: '/uigrid',
                  templateUrl: '/modules/core/views/table_uigrid.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load('ui.grid').then(
                              function(){
                                  return $ocLazyLoad.load('/modules/core/controllers/controllers/uigrid.js');
                              }
                          );
                      }]
                  }
              })
              .state('app.table.editable', {
                  url: '/editable',
                  templateUrl: '/modules/core/views/table_editable.html',
                  controller: 'XeditableCtrl',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load('xeditable').then(
                              function(){
                                  return $ocLazyLoad.load('/modules/core/controllers/controllers/xeditable.js');
                              }
                          );
                      }]
                  }
              })
              .state('app.table.smart', {
                  url: '/smart',
                  templateUrl: '/modules/core/views/table_smart.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load('smart-table').then(
                              function(){
                                  return $ocLazyLoad.load('/modules/core/controllers/controllers/table.js');
                              }
                          );
                      }]
                  }
              })
              // form
              .state('app.form', {
                  url: '/form',
                  template: '<div ui-view class="fade-in"></div>',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load('/modules/core/controllers/controllers/form.js');
                      }]
                  }
              })
              .state('app.form.components', {
                  url: '/components',
                  templateUrl: '/modules/core/views/form_components.html',
                  resolve: {
                      deps: ['uiLoad', '$ocLazyLoad',
                        function( uiLoad, $ocLazyLoad ){
                          return uiLoad.load( JQ_CONFIG.daterangepicker )
                          .then(
                              function(){
                                return uiLoad.load('/modules/core/controllers/controllers/form.components.js');
                              }
                          ).then(
                              function(){
                                return $ocLazyLoad.load('ngBootstrap');
                              }
                          );
                        }
                      ]
                  }
              })
              .state('app.form.elements', {
                  url: '/elements',
                  templateUrl: '/modules/core/views/form_elements.html'
              })
              .state('app.form.validation', {
                  url: '/validation',
                  templateUrl: '/modules/core/views/form_validation.html'
              })
              .state('app.form.wizard', {
                  url: '/wizard',
                  templateUrl: '/modules/core/views/form_wizard.html'
              })
              .state('app.form.fileupload', {
                  url: '/fileupload',
                  templateUrl: '/modules/core/views/form_fileupload.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad){
                          return $ocLazyLoad.load('angularFileUpload').then(
                              function(){
                                 return $ocLazyLoad.load('/modules/core/controllers/controllers/file-upload.js');
                              }
                          );
                      }]
                  }
              })
              .state('app.form.imagecrop', {
                  url: '/imagecrop',
                  templateUrl: '/modules/core/views/form_imagecrop.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad){
                          return $ocLazyLoad.load('ngImgCrop').then(
                              function(){
                                 return $ocLazyLoad.load('/modules/core/controllers/controllers/imgcrop.js');
                              }
                          );
                      }]
                  }
              })
              .state('app.form.select', {
                  url: '/select',
                  templateUrl: '/modules/core/views/form_select.html',
                  controller: 'SelectCtrl',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load('ui.select').then(
                              function(){
                                  return $ocLazyLoad.load('/modules/core/controllers/controllers/select.js');
                              }
                          );
                      }]
                  }
              })
              .state('app.form.slider', {
                  url: '/slider',
                  templateUrl: '/modules/core/views/form_slider.html',
                  controller: 'SliderCtrl',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load('vr.directives.slider').then(
                              function(){
                                  return $ocLazyLoad.load('/modules/core/controllers/controllers/slider.js');
                              }
                          );
                      }]
                  }
              })
              .state('app.form.editor', {
                  url: '/editor',
                  templateUrl: '/modules/core/views/form_editor.html',
                  controller: 'EditorCtrl',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load('textAngular').then(
                              function(){
                                  return $ocLazyLoad.load('/modules/core/controllers/controllers/editor.js');
                              }
                          );
                      }]
                  }
              })
              .state('app.form.xeditable', {
                  url: '/xeditable',
                  templateUrl: '/modules/core/views/form_xeditable.html',
                  controller: 'XeditableCtrl',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load('xeditable').then(
                              function(){
                                  return $ocLazyLoad.load('/modules/core/controllers/controllers/xeditable.js');
                              }
                          );
                      }]
                  }
              })
              // pages
              .state('app.page', {
                  url: '/page',
                  template: '<div ui-view class="fade-in-down"></div>'
              })
              .state('app.page.profile', {
                  url: '/profile',
                  templateUrl: '/modules/core/views/page_profile.html'
              })
              .state('app.page.post', {
                  url: '/post',
                  templateUrl: '/modules/core/views/page_post.html'
              })
              .state('app.page.search', {
                  url: '/search',
                  templateUrl: '/modules/core/views/page_search.html'
              })
              .state('app.page.invoice', {
                  url: '/invoice',
                  templateUrl: '/modules/core/views/page_invoice.html'
              })
              .state('app.page.price', {
                  url: '/price',
                  templateUrl: '/modules/core/views/page_price.html'
              })
              .state('app.docs', {
                  url: '/docs',
                  templateUrl: '/modules/core/views/docs.html'
              })
              // others
              .state('lockme', {
                  url: '/lockme',
                  templateUrl: '/modules/core/views/page_lockme.html'
              })
              .state('access', {
                  url: '/access',
                  template: '<div ui-view class="fade-in-right-big smooth"></div>'
              })
              .state('access.signin', {
                  url: '/signin',
                  templateUrl: '/modules/core/views/page_signin.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['/modules/core/controllers/controllers/signin.js'] );
                      }]
                  }
              })
              .state('access.signup', {
                  url: '/signup',
                  templateUrl: '/modules/core/views/page_signup.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['/modules/core/controllers/controllers/signup.js'] );
                      }]
                  }
              })
              .state('access.forgotpwd', {
                  url: '/forgotpwd',
                  templateUrl: '/modules/core/views/page_forgotpwd.html'
              })
              .state('access.404', {
                  url: '/404',
                  templateUrl: '/modules/core/views/page_404.html'
              })

              // fullCalendar
              .state('app.calendar', {
                  url: '/calendar',
                  templateUrl: '/modules/core/views/app_calendar.html',
                  // use resolve to load other dependences
                  resolve: {
                      deps: ['$ocLazyLoad', 'uiLoad',
                        function( $ocLazyLoad, uiLoad ){
                          return uiLoad.load(
                            JQ_CONFIG.fullcalendar.concat('/modules/core/controllers/app/calendar/calendar.js')
                          ).then(
                            function(){
                              return $ocLazyLoad.load('ui.calendar');
                            }
                          )
                      }]
                  }
              })

              // Reports
              .state('app.reports_table', {
                  url: '/reports_table',
                  templateUrl: '/modules/core/views/reports_table.html',
                  // use resolve to load other dependences
                  resolve: {
                      deps: ['$ocLazyLoad', 'uiLoad',
                        function( $ocLazyLoad, uiLoad ){
                      }]
                  }
              })
              .state('app.reports_graphic', {
                  url: '/reports_graphic',
                  templateUrl: '/modules/core/views/reports_graphic.html',
                  // use resolve to load other dependences
                  resolve: {
                      deps: ['$ocLazyLoad', 'uiLoad',
                        function( $ocLazyLoad, uiLoad ){
                          return uiLoad.load('/modules/core/controllers/controllers/chart.js');
                      }]
                  }
              })
              .state('app.reports_pdf', {
                  url: '/reports_pdf',
                  templateUrl: '/modules/core/views/reports_pdf.html',
                  // use resolve to load other dependences
                  resolve: {
                      deps: ['$ocLazyLoad', 'uiLoad',
                        function( $ocLazyLoad, uiLoad ){
                      }]
                  }
              })

              // mail
              .state('app.mail', {
                  abstract: true,
                  url: '/mail',
                  templateUrl: '/modules/core/views/mail.html',
                  // use resolve to load other dependences
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['/modules/core/controllers/app/mail/mail.js',
                                               '/modules/core/controllers/app/mail/mail-service.js',
                                               JQ_CONFIG.moment] );
                      }]
                  }
              })
              .state('app.mail.list', {
                  url: '/inbox/{fold}',
                  templateUrl: '/modules/core/views/mail.list.html'
              })
              .state('app.mail.detail', {
                  url: '/{mailId:[0-9]{1,4}}',
                  templateUrl: '/modules/core/views/mail.detail.html'
              })
              .state('app.mail.compose', {
                  url: '/compose',
                  templateUrl: '/modules/core/views/mail.new.html'
              })

              .state('layout', {
                  abstract: true,
                  url: '/layout',
                  templateUrl: '/modules/core/views/layout.html'
              })
              .state('layout.fullwidth', {
                  url: '/fullwidth',
                  views: {
                      '': {
                          templateUrl: '/modules/core/views/layout_fullwidth.html'
                      },
                      'footer': {
                          templateUrl: '/modules/core/views/layout_footer_fullwidth.html'
                      }
                  },
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['/modules/core/controllers/controllers/vectormap.js'] );
                      }]
                  }
              })
              .state('layout.mobile', {
                  url: '/mobile',
                  views: {
                      '': {
                          templateUrl: '/modules/core/views/layout_mobile.html'
                      },
                      'footer': {
                          templateUrl: '/modules/core/views/layout_footer_mobile.html'
                      }
                  }
              })
              .state('layout.app', {
                  url: '/app',
                  views: {
                      '': {
                          templateUrl: '/modules/core/views/layout_app.html'
                      },
                      'footer': {
                          templateUrl: '/modules/core/views/layout_footer_fullwidth.html'
                      }
                  },
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['/modules/core/controllers/controllers/tab.js'] );
                      }]
                  }
              })
              .state('apps', {
                  abstract: true,
                  url: '/apps',
                  templateUrl: '/modules/core/views/layout.html'
              })
              .state('apps.note', {
                  url: '/note',
                  templateUrl: '/modules/core/views/apps_note.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['/modules/core/controllers/app/note/note.js',
                                               JQ_CONFIG.moment] );
                      }]
                  }
              })
              .state('apps.contact', {
                  url: '/contact',
                  templateUrl: '/modules/core/views/apps_contact.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['/modules/core/controllers/app/contact/contact.js'] );
                      }]
                  }
              })
              .state('app.weather', {
                  url: '/weather',
                  templateUrl: '/modules/core/views/apps_weather.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(
                              {
                                  name: 'angular-skycons',
                                  files: ['/modules/core/controllers/app/weather/skycons.js',
                                          '/modules/core/controllers/app/weather/angular-skycons.js',
                                          '/modules/core/controllers/app/weather/ctrl.js',
                                          JQ_CONFIG.moment ] 
                              }
                          );
                      }]
                  }
              })
              .state('app.todo', {
                  url: '/todo',
                  templateUrl: '/modules/core/views/apps_todo.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['/modules/core/controllers/app/todo/todo.js',
                                               JQ_CONFIG.moment] );
                      }]
                  }
              })
              .state('app.todo.list', {
                  url: '/{fold}'
              })
              .state('music', {
                  url: '/music',
                  templateUrl: '/modules/core/views/music.html',
                  controller: 'MusicCtrl',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load([
                            'com.2fdevs.videogular', 
                            'com.2fdevs.videogular.plugins.controls', 
                            'com.2fdevs.videogular.plugins.overlayplay',
                            'com.2fdevs.videogular.plugins.poster',
                            'com.2fdevs.videogular.plugins.buffering',
                            '/modules/core/controllers/app/music/ctrl.js', 
                            '/modules/core/controllers/app/music/theme.css'
                          ]);
                      }]
                  }
              })
                .state('music.home', {
                    url: '/home',
                    templateUrl: '/modules/core/views/music.home.html'
                })
                .state('music.genres', {
                    url: '/genres',
                    templateUrl: '/modules/core/views/music.genres.html'
                })
                .state('music.detail', {
                    url: '/detail',
                    templateUrl: '/modules/core/views/music.detail.html'
                })
                .state('music.mtv', {
                    url: '/mtv',
                    templateUrl: '/modules/core/views/music.mtv.html'
                })
                .state('music.mtvdetail', {
                    url: '/mtvdetail',
                    templateUrl: '/modules/core/views/music.mtv.detail.html'
                })
                .state('music.playlist', {
                    url: '/playlist/{fold}',
                    templateUrl: '/modules/core/views/music.playlist.html'
                })
      }
    ]
  );

/* Controllers */
angular.module('app')
  .controller('AppCtrl', ['$scope', '$translate', '$localStorage', '$window', 
    function(              $scope,   $translate,   $localStorage,   $window ) {
      // add 'ie' classes to html
      var isIE = !!navigator.userAgent.match(/MSIE/i);
      isIE && angular.element($window.document.body).addClass('ie');
      isSmartDevice( $window ) && angular.element($window.document.body).addClass('smart');

      // config
      $scope.app = {
        name: 'Cerberus',
        version: '0.0.1',
        // for chart colors
        color: {
          primary: '#7266ba',
          info:    '#23b7e5',
          success: '#27c24c',
          warning: '#fad733',
          danger:  '#f05050',
          light:   '#e8eff0',
          dark:    '#3a3f51',
          black:   '#1c2b36'
        },
        settings: {
          
          themeID: 10,
          navbarHeaderColor: 'bg-info dker',
          navbarCollapseColor: 'bg-info dk',
          asideColor: 'bg-black',

          headerFixed: true,
          asideFixed: false,
          asideFolded: false,
          asideDock: false,
          container: false
        }
      }

      // save settings to local storage
      if ( angular.isDefined($localStorage.settings) ) {
        $scope.app.settings = $localStorage.settings;
      } else {
        $localStorage.settings = $scope.app.settings;
      }
      $scope.$watch('app.settings', function(){
        if( $scope.app.settings.asideDock  &&  $scope.app.settings.asideFixed ){
          // aside dock and fixed must set the header fixed.
          $scope.app.settings.headerFixed = true;
        }
        // save to local storage
        $localStorage.settings = $scope.app.settings;
      }, true);

      // angular translate
      $scope.lang = { isopen: false };
      $scope.langs = {en:'English', de_DE:'German',es:'Español'};
      $scope.selectLang =  "Español";
      $scope.setLang = function(langKey, $event) {
        // set the current lang
        $scope.selectLang = $scope.langs[langKey];
        // You can change the language during runtime
        $translate.use(langKey);
        $scope.lang.isopen = !$scope.lang.isopen;
      };

      function isSmartDevice( $window )
      {
          // Adapted from http://www.detectmobilebrowsers.com
          var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
          // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
          return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
      }

  }]);

angular.module('app')
  .directive('setNgAnimate', ['$animate', function ($animate) {
    return {
        link: function ($scope, $element, $attrs) {
            $scope.$watch( function() {
                return $scope.$eval($attrs.setNgAnimate, $scope);
            }, function(valnew, valold){
                $animate.enabled(!!valnew, $element);
            });
        }
    };
  }]);
angular.module('app')
  .directive('uiButterbar', ['$rootScope', '$anchorScroll', function($rootScope, $anchorScroll) {
     return {
      restrict: 'AC',
      template:'<span class="bar"></span>',
      link: function(scope, el, attrs) {        
        el.addClass('butterbar hide');
        scope.$on('$stateChangeStart', function(event) {
          $anchorScroll();
          el.removeClass('hide').addClass('active');
        });
        scope.$on('$stateChangeSuccess', function( event, toState, toParams, fromState ) {
          event.targetScope.$watch('$viewContentLoaded', function(){
            el.addClass('hide').removeClass('active');
          })
        });
      }
     };
  }]);
angular.module('app')
  .directive('uiFocus', function($timeout, $parse) {
    return {
      link: function(scope, element, attr) {
        var model = $parse(attr.uiFocus);
        scope.$watch(model, function(value) {
          if(value === true) {
            $timeout(function() {
              element[0].focus();
            });
          }
        });
        element.bind('blur', function() {
           scope.$apply(model.assign(scope, false));
        });
      }
    };
  });
 angular.module('app')
  .directive('uiFullscreen', ['uiLoad', 'JQ_CONFIG', '$document', '$window', function(uiLoad, JQ_CONFIG, $document, $window) {
    return {
      restrict: 'AC',
      template:'<i class="fa fa-expand fa-fw text"></i><i class="fa fa-compress fa-fw text-active"></i>',
      link: function(scope, el, attr) {
        el.addClass('hide');
        uiLoad.load(JQ_CONFIG.screenfull).then(function(){
          // disable on ie11
          if (screenfull.enabled && !navigator.userAgent.match(/Trident.*rv:11\./)) {
            el.removeClass('hide');
          }
          el.on('click', function(){
            var target;
            attr.target && ( target = $(attr.target)[0] );            
            screenfull.toggle(target);
          });
          $document.on(screenfull.raw.fullscreenchange, function () {
            if(screenfull.isFullscreen){
              el.addClass('active');
            }else{
              el.removeClass('active');
            }
          });
        });
      }
    };
  }]);
  app.factory('d3Service', ['$document', '$window', '$q', '$rootScope',
  function($document, $window, $q, $rootScope) {
      var d = $q.defer(),
          d3service = {
              d3: function() { return d.promise; }
          };
      function onScriptLoad() {
          // Load client in the browser
          $rootScope.$apply(function() { d.resolve($window.d3); });
      }
      var scriptTag = $document[0].createElement('script');
      scriptTag.type = 'text/javascript'; 
      scriptTag.async = true;
      scriptTag.src = '//cdnjs.cloudflare.com/ajax/libs/d3/3.4.1/d3.min.js';
      scriptTag.onreadystatechange = function () {
          if (this.readyState == 'complete') onScriptLoad();
      };
      scriptTag.onload = onScriptLoad;
 
      var s = $document[0].getElementsByTagName('body')[0];
      s.appendChild(scriptTag);
 
      return d3service;
  }]);
 angular.module('app')
.directive('ngRadialGauge', ['$window', '$timeout','d3Service',
 function ($window, $timeout, d3Service) {
     return {
         restrict: 'A',
         scope: {
             lowerLimit: '=',
             upperLimit: '=',
             ranges: '=',
             value: '=',
             valueUnit: '=',
             precision: '=',
             label: '@',
             onClick: '&'
         },
         link: function (scope, ele, attrs) {
             "use strict";
             d3Service.d3().then(function (d3) {
                 var renderTimeout;
                 var width = parseInt(attrs.width) || 300;
                 var innerRadius = Math.round((width * 130) / 300);
                 var outterRadius = Math.round((width * 145) / 300);
                 var majorGraduations = parseInt(attrs.majorGraduations - 1) || 5;
                 var minorGraduations = parseInt(attrs.minorGraduations) || 10;
                 var majorGraduationLenght = Math.round((width * 16) / 300);
                 var minorGraduationLenght = Math.round((width * 10) / 300);
                 var majorGraduationMarginTop = Math.round((width * 7) / 300);
                 var majorGraduationColor = attrs.majorGraduationColor || "#B0B0B0";
                 var minorGraduationColor = attrs.minorGraduationColor || "#D0D0D0";
                 var majorGraduationTextColor = attrs.majorGraduationTextColor || "#6C6C6C";
                 var needleColor = attrs.needleColor || "#416094";
                 var valueVerticalOffset = Math.round((width * 30) / 300);
                 var unactiveColor = "#D7D7D7";
                 var majorGraduationTextSize = parseInt(attrs.majorGraduationTextSize);
                 var needleValueTextSize = parseInt(attrs.needleValueTextSize);

                 var svg = d3.select(ele[0])
                     .append('svg')
                     .attr('width', width)
                     .attr('height', width * 0.75);
                 var renderMajorGraduations = function (majorGraduationsAngles) {
                     var centerX = width / 2;
                     var centerY = width / 2;
                     //Render Major Graduations
                     $.each(majorGraduationsAngles, function (index, value) {
                         var cos1Adj = Math.round(Math.cos((90 - value) * Math.PI / 180) * (innerRadius - majorGraduationMarginTop - majorGraduationLenght));
                         var sin1Adj = Math.round(Math.sin((90 - value) * Math.PI / 180) * (innerRadius - majorGraduationMarginTop - majorGraduationLenght));
                         var cos2Adj = Math.round(Math.cos((90 - value) * Math.PI / 180) * (innerRadius - majorGraduationMarginTop));
                         var sin2Adj = Math.round(Math.sin((90 - value) * Math.PI / 180) * (innerRadius - majorGraduationMarginTop));
                         var x1 = centerX + cos1Adj;
                         var y1 = centerY + sin1Adj * -1;
                         var x2 = centerX + cos2Adj;
                         var y2 = centerY + sin2Adj * -1;
                         svg.append("svg:line")
                         .attr("x1", x1)
                         .attr("y1", y1)
                         .attr("x2", x2)
                         .attr("y2", y2)
                         .style("stroke", majorGraduationColor);

                         renderMinorGraduations(majorGraduationsAngles, index);
                     });
                 };
                 var renderMinorGraduations = function (majorGraduationsAngles, indexMajor) {
                     var minorGraduationsAngles = [];

                     if (indexMajor > 0) {
                         var minScale = majorGraduationsAngles[indexMajor - 1];
                         var maxScale = majorGraduationsAngles[indexMajor];
                         var scaleRange = maxScale - minScale;

                         for (var i = 1; i < minorGraduations; i++) {
                             var scaleValue = minScale + i * scaleRange / minorGraduations;
                             minorGraduationsAngles.push(scaleValue);
                         }

                         var centerX = width / 2;
                         var centerY = width / 2;
                         //Render Minor Graduations
                         $.each(minorGraduationsAngles, function (indexMinor, value) {
                             var cos1Adj = Math.round(Math.cos((90 - value) * Math.PI / 180) * (innerRadius - majorGraduationMarginTop - minorGraduationLenght));
                             var sin1Adj = Math.round(Math.sin((90 - value) * Math.PI / 180) * (innerRadius - majorGraduationMarginTop - minorGraduationLenght));
                             var cos2Adj = Math.round(Math.cos((90 - value) * Math.PI / 180) * (innerRadius - majorGraduationMarginTop));
                             var sin2Adj = Math.round(Math.sin((90 - value) * Math.PI / 180) * (innerRadius - majorGraduationMarginTop));
                             var x1 = centerX + cos1Adj;
                             var y1 = centerY + sin1Adj * -1;
                             var x2 = centerX + cos2Adj;
                             var y2 = centerY + sin2Adj * -1;
                             svg.append("svg:line")
                             .attr("x1", x1)
                             .attr("y1", y1)
                             .attr("x2", x2)
                             .attr("y2", y2)
                             .style("stroke", minorGraduationColor);
                         });
                     }
                 };
                 var getMajorGraduationValues = function (minLimit, maxLimit) {
                     var scaleRange = maxLimit - minLimit;
                     var majorGraduationValues = [];
                     for (var i = 0; i <= majorGraduations; i++) {
                         var scaleValue = minLimit + i * scaleRange / (majorGraduations);
                         majorGraduationValues.push(scaleValue.toFixed(scope.precision));
                     }

                     return majorGraduationValues;
                 };
                 var getMajorGraduationAngles = function () {
                     var scaleRange = 240;
                     var minScale = -120;
                     var graduationsAngles = [];
                     for (var i = 0; i <= majorGraduations; i++) {
                         var scaleValue = minScale + i * scaleRange / (majorGraduations);
                         graduationsAngles.push(scaleValue);
                     }

                     return graduationsAngles;
                 };
                 var renderMajorGraduationTexts = function (majorGraduationsAngles, majorGraduationValues) {
                     if (!scope.ranges) return;

                     var centerX = width / 2;
                     var centerY = width / 2;
                     var textVerticalPadding = 5;
                     var textHorizontalPadding = 5;

                     var lastGraduationValue = majorGraduationValues[majorGraduationValues.length - 1];
                     var textSize = isNaN(majorGraduationTextSize) ? (width * 12) / 300 : majorGraduationTextSize;
                     var fontStyle = textSize + "px Courier";

                     var dummyText = svg.append("text")
                         .attr("x", centerX)
                         .attr("y", centerY)
                         .attr("fill", "transparent")
                         .attr("text-anchor", "middle")
                         .style("font", fontStyle)
                         .text(lastGraduationValue + scope.valueUnit);

                     var textWidth = dummyText.node().getBBox().width;

                     for (var i = 0; i < majorGraduationsAngles.length; i++) {
                         var angle = majorGraduationsAngles[i];
                         var cos1Adj = Math.round(Math.cos((90 - angle) * Math.PI / 180) * (innerRadius - majorGraduationMarginTop - majorGraduationLenght - textHorizontalPadding));
                         var sin1Adj = Math.round(Math.sin((90 - angle) * Math.PI / 180) * (innerRadius - majorGraduationMarginTop - majorGraduationLenght - textVerticalPadding));

                         var sin1Factor = 1;
                         if (sin1Adj < 0) sin1Factor = 1.1;
                         if (sin1Adj > 0) sin1Factor = 0.9;
                         if (cos1Adj > 0) {
                             if (angle > 0 && angle < 45) {
                                 cos1Adj -= textWidth / 2;
                             } else {
                                 cos1Adj -= textWidth;
                             }
                         }
                         if (cos1Adj < 0) {
                             if (angle < 0 && angle > -45) {
                                 cos1Adj -= textWidth / 2;
                             }
                         }
                         if (cos1Adj == 0) {
                             cos1Adj -= angle == 0 ? textWidth / 4 : textWidth / 2;
                         }

                         var x1 = centerX + cos1Adj;
                         var y1 = centerY + sin1Adj * sin1Factor * -1;

                         svg.append("text")
                         .attr("class", "mtt-majorGraduationText")
                         .style("font", fontStyle)
                         .attr("text-align", "center")
                         .attr("x", x1)
                         .attr("dy", y1)
                         .attr("fill", majorGraduationTextColor)
                         .text(majorGraduationValues[i] + scope.valueUnit);
                     }
                 };
                 var renderGraduationNeedle = function (minLimit, maxLimit) {
                     var centerX = width / 2;
                     var centerY = width / 2;
                     var centerColor;

                     if (typeof scope.value === 'undefined') {
                         centerColor = unactiveColor;
                     } else {
                         centerColor = needleColor;
                         var needleValue = ((scope.value - minLimit) * 240 / (maxLimit - minLimit)) - 30;
                         var thetaRad = needleValue * Math.PI / 180;

                         var needleLen = innerRadius - majorGraduationLenght - majorGraduationMarginTop;
                         var needleRadius = (width * 2.5) / 300;
                         var topX = centerX - needleLen * Math.cos(thetaRad);
                         var topY = centerY - needleLen * Math.sin(thetaRad);
                         var leftX = centerX - needleRadius * Math.cos(thetaRad - Math.PI / 2);
                         var leftY = centerY - needleRadius * Math.sin(thetaRad - Math.PI / 2);
                         var rightX = centerX - needleRadius * Math.cos(thetaRad + Math.PI / 2);
                         var rightY = centerY - needleRadius * Math.sin(thetaRad + Math.PI / 2);
                         var triangle = "M " + leftX + " " + leftY + " L " + topX + " " + topY + " L " + rightX + " " + rightY;
                         var textSize = isNaN(needleValueTextSize) ? (width * 12) / 300 : needleValueTextSize;
                         var fontStyle = textSize + "px Courier";

                         if (scope.value >= minLimit && scope.value <= maxLimit) {
                             svg.append("svg:path")
                               .attr("d", triangle)
                               .style("stroke-width", 1)
                               .style("stroke", needleColor)
                               .style("fill", needleColor);
                         }

                         svg.append("text")
                             .attr("x", centerX)
                             .attr("y", centerY + valueVerticalOffset)
                             .attr("class", "mtt-graduationValueText")
                             .attr("fill", needleColor)
                             .attr("text-anchor", "middle")
                             .attr("font-weight", "bold")
                             .style("font", fontStyle)
                             .text('[ ' + scope.value.toFixed(scope.precision) + scope.valueUnit + ' ]');
                     }

                     var circleRadius = (width * 6) / 300;

                     svg.append("circle")
                       .attr("r", circleRadius)
                       .attr("cy", centerX)
                       .attr("cx", centerY)
                       .attr("fill", centerColor);
                 };
                 $window.onresize = function () {
                     scope.$apply();
                 };
                 scope.$watch(function () {
                     return angular.element($window)[0].innerWidth;
                 }, function () {
                     scope.render();
                 });
                 scope.$watch('ranges', function () {
                     scope.render();
                 }, true);
                 scope.$watch('value', function () {
                     scope.render();
                 }, true);
                 scope.render = function () {
                     svg.selectAll('*').remove();

                     if (renderTimeout) clearTimeout(renderTimeout);

                     renderTimeout = $timeout(function () {

                         var maxLimit = scope.upperLimit ? scope.upperLimit : 100;
                         var minLimit = scope.lowerLimit ? scope.lowerLimit : 0;
                         var d3DataSource = [];

                         if (typeof scope.ranges === 'undefined') {
                             d3DataSource.push([minLimit, maxLimit, unactiveColor]);
                         } else {
                             //Data Generation
                             $.each(scope.ranges, function (index, value) {
                                 d3DataSource.push([value.min, value.max, value.color]);
                             });
                         }

                         //Render Gauge Color Area
                         var translate = "translate(" + width / 2 + "," + width / 2 + ")";
                         var cScale = d3.scale.linear().domain([minLimit, maxLimit]).range([-120 * (Math.PI / 180), 120 * (Math.PI / 180)]);
                         var arc = d3.svg.arc()
                             .innerRadius(innerRadius)
                             .outerRadius(outterRadius)
                             .startAngle(function (d) { return cScale(d[0]); })
                             .endAngle(function (d) { return cScale(d[1]); });
                         svg.selectAll("path")
                             .data(d3DataSource)
                             .enter()
                             .append("path")
                             .attr("d", arc)
                             .style("fill", function (d) { return d[2]; })
                             .attr("transform", translate);

                         var majorGraduationsAngles = getMajorGraduationAngles();
                         var majorGraduationValues = getMajorGraduationValues(minLimit, maxLimit);
                         renderMajorGraduations(majorGraduationsAngles);
                         renderMajorGraduationTexts(majorGraduationsAngles, majorGraduationValues);
                         renderGraduationNeedle(minLimit, maxLimit);
                     }, 200);
                 };
             });
         }
     };
 }])
'use strict';

/**
 * 0.1.1
 * General-purpose jQuery wrapper. Simply pass the plugin name as the expression.
 *
 * It is possible to specify a default set of parameters for each jQuery plugin.
 * Under the jq key, namespace each plugin by that which will be passed to ui-jq.
 * Unfortunately, at this time you can only pre-define the first parameter.
 * @example { jq : { datepicker : { showOn:'click' } } }
 *
 * @param ui-jq {string} The $elm.[pluginName]() to call.
 * @param [ui-options] {mixed} Expression to be evaluated and passed as options to the function
 *     Multiple parameters can be separated by commas
 * @param [ui-refresh] {expression} Watch expression and refire plugin on changes
 *
 * @example <input ui-jq="datepicker" ui-options="{showOn:'click'},secondParameter,thirdParameter" ui-refresh="iChange">
 */
angular.module('ui.jq', ['ui.load']).
  value('uiJqConfig', {}).
  directive('uiJq', ['uiJqConfig', 'JQ_CONFIG', 'uiLoad', '$timeout', function uiJqInjectingFunction(uiJqConfig, JQ_CONFIG, uiLoad, $timeout) {

  return {
    restrict: 'A',
    compile: function uiJqCompilingFunction(tElm, tAttrs) {

      if (!angular.isFunction(tElm[tAttrs.uiJq]) && !JQ_CONFIG[tAttrs.uiJq]) {
        throw new Error('ui-jq: The "' + tAttrs.uiJq + '" function does not exist');
      }
      var options = uiJqConfig && uiJqConfig[tAttrs.uiJq];

      return function uiJqLinkingFunction(scope, elm, attrs) {

        function getOptions(){
          var linkOptions = [];

          // If ui-options are passed, merge (or override) them onto global defaults and pass to the jQuery method
          if (attrs.uiOptions) {
            linkOptions = scope.$eval('[' + attrs.uiOptions + ']');
            if (angular.isObject(options) && angular.isObject(linkOptions[0])) {
              linkOptions[0] = angular.extend({}, options, linkOptions[0]);
            }
          } else if (options) {
            linkOptions = [options];
          }
          return linkOptions;
        }

        // If change compatibility is enabled, the form input's "change" event will trigger an "input" event
        if (attrs.ngModel && elm.is('select,input,textarea')) {
          elm.bind('change', function() {
            elm.trigger('input');
          });
        }

        // Call jQuery method and pass relevant options
        function callPlugin() {
          $timeout(function() {
            elm[attrs.uiJq].apply(elm, getOptions());
          }, 0, false);
        }

        function refresh(){
          // If ui-refresh is used, re-fire the the method upon every change
          if (attrs.uiRefresh) {
            scope.$watch(attrs.uiRefresh, function() {
              callPlugin();
            });
          }
        }

        if ( JQ_CONFIG[attrs.uiJq] ) {
          uiLoad.load(JQ_CONFIG[attrs.uiJq]).then(function() {
            callPlugin();
            refresh();
          }).catch(function() {
            
          });
        } else {
          callPlugin();
          refresh();
        }
      };
    }
  };
}]);
angular.module('app')
  .directive('uiModule', ['MODULE_CONFIG','uiLoad', '$compile', function(MODULE_CONFIG, uiLoad, $compile) {
    return {
      restrict: 'A',
      compile: function (el, attrs) {
        var contents = el.contents().clone();
        return function(scope, el, attrs){
          el.contents().remove();
          uiLoad.load(MODULE_CONFIG[attrs.uiModule])
          .then(function(){
            $compile(contents)(scope, function(clonedElement, scope) {
              el.append(clonedElement);
            });
          });
        }
      }
    };
  }]);
angular.module('app')
  .directive('uiNav', ['$timeout', function($timeout) {
    return {
      restrict: 'AC',
      link: function(scope, el, attr) {
        var _window = $(window), 
        _mb = 768, 
        wrap = $('.app-aside'), 
        next, 
        backdrop = '.dropdown-backdrop';
        // unfolded
        el.on('click', 'a', function(e) {
          next && next.trigger('mouseleave.nav');
          var _this = $(this);
          _this.parent().siblings( ".active" ).toggleClass('active');
          _this.next().is('ul') &&  _this.parent().toggleClass('active') &&  e.preventDefault();
          // mobile
          _this.next().is('ul') || ( ( _window.width() < _mb ) && $('.app-aside').removeClass('show off-screen') );
        });

        // folded & fixed
        el.on('mouseenter', 'a', function(e){
          next && next.trigger('mouseleave.nav');
          $('> .nav', wrap).remove();
          if ( !$('.app-aside-fixed.app-aside-folded').length || ( _window.width() < _mb ) || $('.app-aside-dock').length) return;
          var _this = $(e.target)
          , top
          , w_h = $(window).height()
          , offset = 50
          , min = 150;

          !_this.is('a') && (_this = _this.closest('a'));
          if( _this.next().is('ul') ){
             next = _this.next();
          }else{
            return;
          }
         
          _this.parent().addClass('active');
          top = _this.parent().position().top + offset;
          next.css('top', top);
          if( top + next.height() > w_h ){
            next.css('bottom', 0);
          }
          if(top + min > w_h){
            next.css('bottom', w_h - top - offset).css('top', 'auto');
          }
          next.appendTo(wrap);

          next.on('mouseleave.nav', function(e){
            $(backdrop).remove();
            next.appendTo(_this.parent());
            next.off('mouseleave.nav').css('top', 'auto').css('bottom', 'auto');
            _this.parent().removeClass('active');
          });

          $('.smart').length && $('<div class="dropdown-backdrop"/>').insertAfter('.app-aside').on('click', function(next){
            next && next.trigger('mouseleave.nav');
          });

        });

        wrap.on('mouseleave', function(e){
          next && next.trigger('mouseleave.nav');
          $('> .nav', wrap).remove();
        });
      }
    };
  }]);
angular.module('app')
  .directive('uiScrollTo', ['$location', '$anchorScroll', function($location, $anchorScroll) {
    return {
      restrict: 'AC',
      link: function(scope, el, attr) {
        el.on('click', function(e) {
          $location.hash(attr.uiScrollTo);
          $anchorScroll();
        });
      }
    };
  }]);

angular.module('app')
  .directive('uiShift', ['$timeout', function($timeout) {
    return {
      restrict: 'A',
      link: function(scope, el, attr) {
        // get the $prev or $parent of this el
        var _el = $(el),
            _window = $(window),
            prev = _el.prev(),
            parent,
            width = _window.width()
            ;

        !prev.length && (parent = _el.parent());
        
        function sm(){
          $timeout(function () {
            var method = attr.uiShift;
            var target = attr.target;
            _el.hasClass('in') || _el[method](target).addClass('in');
          });
        }
        
        function md(){
          parent && parent['prepend'](el);
          !parent && _el['insertAfter'](prev);
          _el.removeClass('in');
        }

        (width < 768 && sm()) || md();

        _window.resize(function() {
          if(width !== _window.width()){
            $timeout(function(){
              (_window.width() < 768 && sm()) || md();
              width = _window.width();
            });
          }
        });
      }
    };
  }]);
angular.module('app')
  .directive('uiToggleClass', ['$timeout', '$document', function($timeout, $document) {
    return {
      restrict: 'AC',
      link: function(scope, el, attr) {
        el.on('click', function(e) {
          e.preventDefault();
          var classes = attr.uiToggleClass.split(','),
              targets = (attr.target && attr.target.split(',')) || Array(el),
              key = 0;
          angular.forEach(classes, function( _class ) {
            var target = targets[(targets.length && key)];            
            ( _class.indexOf( '*' ) !== -1 ) && magic(_class, target);
            $( target ).toggleClass(_class);
            key ++;
          });
          $(el).toggleClass('active');

          function magic(_class, target){
            var patt = new RegExp( '\\s' + 
                _class.
                  replace( /\*/g, '[A-Za-z0-9-_]+' ).
                  split( ' ' ).
                  join( '\\s|\\s' ) + 
                '\\s', 'g' );
            var cn = ' ' + $(target)[0].className + ' ';
            while ( patt.test( cn ) ) {
              cn = cn.replace( patt, ' ' );
            }
            $(target)[0].className = $.trim( cn );
          }
        });
      }
    };
  }]);
'use strict';

/**
 * 0.1.1
 * Deferred load js/css file, used for ui-jq.js and Lazy Loading.
 * 
 * @ flatfull.com All Rights Reserved.
 * Author url: http://themeforest.net/user/flatfull
 */

angular.module('ui.load', [])
	.service('uiLoad', ['$document', '$q', '$timeout', function ($document, $q, $timeout) {

		var loaded = [];
		var promise = false;
		var deferred = $q.defer();

		/**
		 * Chain loads the given sources
		 * @param srcs array, script or css
		 * @returns {*} Promise that will be resolved once the sources has been loaded.
		 */
		this.load = function (srcs) {
			srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
			var self = this;
			if(!promise){
				promise = deferred.promise;
			}
      angular.forEach(srcs, function(src) {
      	promise = promise.then( function(){
      		return src.indexOf('.css') >=0 ? self.loadCSS(src) : self.loadScript(src);
      	} );
      });
      deferred.resolve();
      return promise;
		}

		/**
		 * Dynamically loads the given script
		 * @param src The url of the script to load dynamically
		 * @returns {*} Promise that will be resolved once the script has been loaded.
		 */
		this.loadScript = function (src) {
			if(loaded[src]) return loaded[src].promise;

			var deferred = $q.defer();
			var script = $document[0].createElement('script');
			script.src = src;
			script.onload = function (e) {
				$timeout(function () {
					deferred.resolve(e);
				});
			};
			script.onerror = function (e) {
				$timeout(function () {
					deferred.reject(e);
				});
			};
			$document[0].body.appendChild(script);
			loaded[src] = deferred;

			return deferred.promise;
		};

		/**
		 * Dynamically loads the given CSS file
		 * @param href The url of the CSS to load dynamically
		 * @returns {*} Promise that will be resolved once the CSS file has been loaded.
		 */
		this.loadCSS = function (href) {
			if(loaded[href]) return loaded[href].promise;

			var deferred = $q.defer();
			var style = $document[0].createElement('link');
			style.rel = 'stylesheet';
			style.type = 'text/css';
			style.href = href;
			style.onload = function (e) {
				$timeout(function () {
					deferred.resolve(e);
				});
			};
			style.onerror = function (e) {
				$timeout(function () {
					deferred.reject(e);
				});
			};
			$document[0].head.appendChild(style);
			loaded[href] = deferred;

			return deferred.promise;
		};
}]);
'use strict';

/* Filters */
// need load the moment.js to use this filter. 
angular.module('app')
  .filter('fromNow', function() {
    return function(date) {
      return moment(date).fromNow();
    }
  });
'use strict';

/* Controllers */

  // bootstrap controller
  app.controller('AccordionDemoCtrl', ['$scope', function($scope) {
    $scope.oneAtATime = true;

    $scope.groups = [
      {
        title: 'Accordion group header - #1',
        content: 'Dynamic group body - #1'
      },
      {
        title: 'Accordion group header - #2',
        content: 'Dynamic group body - #2'
      }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
      var newItemNo = $scope.items.length + 1;
      $scope.items.push('Item ' + newItemNo);
    };

    $scope.status = {
      isFirstOpen: true,
      isFirstDisabled: false
    };
  }])
  ; 
  app.controller('AlertDemoCtrl', ['$scope', function($scope) {
    $scope.alerts = [
      { type: 'success', msg: 'Well done! You successfully read this important alert message.' },
      { type: 'info', msg: 'Heads up! This alert needs your attention, but it is not super important.' },
      { type: 'warning', msg: 'Warning! Best check yo self, you are not looking too good...' }
    ];

    $scope.addAlert = function() {
      $scope.alerts.push({type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.'});
    };

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };
  }])
  ; 
  app.controller('ButtonsDemoCtrl', ['$scope', function($scope) {
    $scope.singleModel = 1;

    $scope.radioModel = 'Middle';

    $scope.checkModel = {
      left: false,
      middle: true,
      right: false
    };
  }])
  ; 
  app.controller('CarouselDemoCtrl', ['$scope', function($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
      slides.push({
        image: 'img/c' + slides.length + '.jpg',
        text: ['Carousel text #0','Carousel text #1','Carousel text #2','Carousel text #3'][slides.length % 4]
      });
    };
    for (var i=0; i<4; i++) {
      $scope.addSlide();
    }
  }])
  ; 
  app.controller('DropdownDemoCtrl', ['$scope', function($scope) {
    $scope.items = [
      'The first choice!',
      'And another choice for you.',
      'but wait! A third!'
    ];

    $scope.status = {
      isopen: false
    };

    $scope.toggled = function(open) {
      //console.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.status.isopen = !$scope.status.isopen;
    };
  }])
  ; 
  app.controller('ModalInstanceCtrl', ['$scope', '$modalInstance', 'items', function($scope, $modalInstance, items) {
    $scope.items = items;
    $scope.selected = {
      item: $scope.items[0]
    };

    $scope.ok = function () {
      $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }])
  ; 
  app.controller('ModalDemoCtrl', ['$scope', '$modal', '$log', function($scope, $modal, $log) {
    $scope.items = ['item1', 'item2', 'item3'];
    $scope.open = function (size) {
      var modalInstance = $modal.open({
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  }])
  ; 
  app.controller('PaginationDemoCtrl', ['$scope', '$log', function($scope, $log) {
    $scope.totalItems = 64;
    $scope.currentPage = 4;

    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
      $log.info('Page changed to: ' + $scope.currentPage);
    };

    $scope.maxSize = 5;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;
  }])
  ; 
  app.controller('PopoverDemoCtrl', ['$scope', function($scope) {
    $scope.dynamicPopover = 'Hello, World!';
    $scope.dynamicPopoverTitle = 'Title';
  }])
  ; 
  app.controller('ProgressDemoCtrl', ['$scope', function($scope) {
    $scope.max = 200;

    $scope.random = function() {
      var value = Math.floor((Math.random() * 100) + 1);
      var type;

      if (value < 25) {
        type = 'success';
      } else if (value < 50) {
        type = 'info';
      } else if (value < 75) {
        type = 'warning';
      } else {
        type = 'danger';
      }

      $scope.showWarning = (type === 'danger' || type === 'warning');

      $scope.dynamic = value;
      $scope.type = type;
    };
    $scope.random();

    $scope.randomStacked = function() {
      $scope.stacked = [];
      var types = ['success', 'info', 'warning', 'danger'];

      for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
          var index = Math.floor((Math.random() * 4));
          $scope.stacked.push({
            value: Math.floor((Math.random() * 30) + 1),
            type: types[index]
          });
      }
    };
    $scope.randomStacked();
  }])
  ; 
  app.controller('TabsDemoCtrl', ['$scope', function($scope) {
    $scope.tabs = [
      { title:'Dynamic Title 1', content:'Dynamic content 1' },
      { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
    ];
  }])
  ; 
  app.controller('RatingDemoCtrl', ['$scope', function($scope) {
    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;

    $scope.hoveringOver = function(value) {
      $scope.overStar = value;
      $scope.percent = 100 * (value / $scope.max);
    };
  }])
  ; 
  app.controller('TooltipDemoCtrl', ['$scope', function($scope) {
    $scope.dynamicTooltip = 'Hello, World!';
    $scope.dynamicTooltipText = 'dynamic';
    $scope.htmlTooltip = 'I\'ve been made <b>bold</b>!';
  }])
  ; 
  app.controller('TypeaheadDemoCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.selected = undefined;
    $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    // Any function returning a promise object can be used to load values asynchronously
    $scope.getLocation = function(val) {
      return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: val,
          sensor: false
        }
      }).then(function(res){
        var addresses = [];
        angular.forEach(res.data.results, function(item){
          addresses.push(item.formatted_address);
        });
        return addresses;
      });
    };
  }])
  ; 
  app.controller('DatepickerDemoCtrl', ['$scope', function($scope) {
    $scope.today = function() {
      $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
      $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
      return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1,
      class: 'datepicker'
    };

    $scope.initDate = new Date('2016-15-20');
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
  }])
  ; 
  app.controller('TimepickerDemoCtrl', ['$scope', function($scope) {
    $scope.mytime = new Date();

    $scope.hstep = 1;
    $scope.mstep = 15;

    $scope.options = {
      hstep: [1, 2, 3],
      mstep: [1, 5, 10, 15, 25, 30]
    };

    $scope.ismeridian = true;
    $scope.toggleMode = function() {
      $scope.ismeridian = ! $scope.ismeridian;
    };

    $scope.update = function() {
      var d = new Date();
      d.setHours( 14 );
      d.setMinutes( 0 );
      $scope.mytime = d;
    };

    $scope.changed = function () {
      //console.log('Time changed to: ' + $scope.mytime);
    };

    $scope.clear = function() {
      $scope.mytime = null;
    };
  }]);