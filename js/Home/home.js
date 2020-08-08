define(['backbone','underscore', 'text!./home.html', 'Modelos/cancion.model']
	, function(Backbone, _ , template, Cancion){

	var vHome = Backbone.View.extend({
		events:{
			// Eventos para la Vista
		},
		initialize:function(){
			this.locals = {}
			this.model = new Cancion()
			
		},
		preventDefault: (e) => e.preventDefault(),
		//template: _.template($('body').html()), // Mantener que el contenido se encuentre en el index [SEO]
		template: _.template(template), 
		render:function(){
			// Imprimimos en pantalla el template
			this.$el.html(this.template());
			return this
		}
	})

	return vHome
})