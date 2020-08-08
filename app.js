// Require JS 

// For any third party dependencies, like jQuery, place them in the lib folder.
// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.

window.urlServidor = 'https://inalambria-cfc.herokuapp.com';

requirejs.config({
    baseUrl: 'lib',
    config:{
        //'User/user.model': {urlServer: 'http://soiplast-v3.herokuapp.com'},
        'Modelos/cancion.model': {urlServer: window.urlServidor}
    },
    shim:{ 
    	'backbone': {
            //These script dependencies should be loaded before loading backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the module value.
            exports: 'Backbone'
        },
        /*'foundation':{
            deps: ['jquery'],
            exports: 'Foundation'
        },*/
        //'User/user.collection': {deps:['User/user.model'], export:'JugadorCollection'}
    },
    paths: {
        jquery: 'jquery-min',
        backbone: 'backbone-min',
        underscore: 'underscore-min',
        //foundation: 'foundation-sites/dist/js/foundation.min',
        text:'text',
        router: '../js/router',
        Home: '../js/Home',
        Modelos: '../modelos'
    },
    waitSeconds:0
});


    // Start loading the main app file. Put all of
    // your application logic in there.
    requirejs(['backbone', 'router'],function(Backbone){

        Base = {}

        $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
            options.crossDomain ={
                crossDomain: true
            };
            options.xhrFields = {
                withCredentials: true
            };
        });

        var Router = require('router');
        Base.app = new Router()
    });
      