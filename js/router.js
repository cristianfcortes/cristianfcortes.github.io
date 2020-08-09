define(function(require, exports, module){ 
    Backbone = require('backbone');
    let Home = require('Home/home');
    
    let Router = Backbone.Router.extend({
        routes: {
            "": "Home"
        },
        initialize: function (a,b,c){
            var self = this
            Backbone.history.start({root: "/"});
        },
        // Pagina principal 
        Home: function(){
            // Cargamos la Vista a la variable vHome
            let vHome = this.m = new Home()
            vHome.setElement($('.main'))
        }
    });

    return Router;

})