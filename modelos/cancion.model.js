//
// Modelo de Cancion 
//
define(['backbone', 'module'], function(Backbone, module){

	var cancion = Backbone.Model.extend({
		urlRoot: module.config().urlServer+'/cancion',
		idAttribute: "_id",
		defaults:{ 
			
		},
		initialize:function(){
			var self = this 
		},
		parse:function(data){

		}	
	})

	return cancion
})