define(['backbone', 'module', 'Modelos/cancion.model'], function(Backbone, module, Cancion){
	return Backbone.Collection.extend({
		model: Cancion,
		url: module.config().urlServer+'/cancion',
		initialize:function(models, options){
			let self = this;
			this.cModel = Cancion;

		},
		parse:function(data){
			
			return data.result
		}

	})
})