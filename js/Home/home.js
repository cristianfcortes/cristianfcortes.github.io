define(['backbone','underscore', 'text!./home.html', 'Collection/cancion.collection']
	, function(Backbone, _ , template, Cancion){

	var vHome = Backbone.View.extend({
		events:{
			// Eventos para la Vista
			'submit .form-cancion':'guardarCancion'
		},
		initialize:function(){
			let self = this
			this.locals = {}
			this.collection = new Cancion()
			this.collection.fetch()

			this.collection.on('sync', function(a,b,c){
				self.render()
			})


			
		},
		guardarCancion:function(e){
			let self = this
			//e.stopPropagation()
			e.preventDefault()
			let datos = {}
			$(e.target).serializeArray().forEach(i=>datos[i.name]=i.value)

			this.collection.create(datos)
		},
		template: _.template(template), 
		render:function(){
			console.log(this.collection.toJSON())
			// Imprimimos en pantalla el template
			this.$el.html(this.template({lista:this.collection.toJSON()}));
			return this
		}
	})

	return vHome
})