//
// Modelo de Lista de Canciones 
//
define(['backbone', 'module', 'Collection/cancion.collection'], function(Backbone, module, Canciones){

	var lista = Backbone.Model.extend({
		urlRoot: module.config().urlServer+'/lista',
		idAttribute: "_id",
		defaults:{ 
			
		},
		initialize:function(){
			var self = this 
			this.set('canciones', new Canciones())	
		}
	})

	return lista
})
