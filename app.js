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
        'Modelos/cancion.model': {urlServer: window.urlServidor},
        'Modelos/lista.model': {urlServer: window.urlServidor},
        'Collection/cancion.collection': {urlServer: window.urlServidor}
    },
    shim:{ 
    	'backbone': {
            //These script dependencies should be loaded before loading backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the module value.
            exports: 'Backbone'
        }
    },
    paths: {
        jquery: 'jquery-min',
        backbone: 'backbone-min',
        underscore: 'underscore-min',
        //foundation: 'foundation-sites/dist/js/foundation.min',
        text:'text',
        router: '../js/router',
        Home: '../js/Home',
        Modelos: '../modelos',
        Collection: '../collection'
    },
    waitSeconds:0
});


// Cargamos el archivo principal de la aplicación
requirejs(['backbone', 'router'],function(Backbone){

    Base = {}

    // Soluciona los permisos de CORS
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
  