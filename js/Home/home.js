define(['backbone','underscore', 'text!./home.html', 'Collection/cancion.collection', 'Modelos/lista.model']
	, function(Backbone, _ , template, Cancion, Lista){

	var vHome = Backbone.View.extend({
		events:{
			// Eventos para la Vista
			'submit .form-cancion':'guardarCancion',
			'click .fa-heart':'agregarCancionLista'
		},
		initialize:function(){
			let self = this
			this.locals = {}
			this.collection = new Cancion()
			this.collection.fetch()			

			this.collection.on('sync', function(a,b,c){
				// Traemos la lista de Favoritos
				self.model = new Lista({_id:"5f301bcae1becd0017b8c899"})
				self.model.fetch()
				self.model.on("sync", function(model, error){
					console.log(model.toJSON())
					self.render()
				})
				// Imprimimos las canciones en pantalla
				self.render()
			})

			// Validacion de los campos para el formulario 
			this.collection.on("invalid", function(model, error) {
				self.collection.remove(model)
			  	alert(error);
			});
		},
		agregarCancionLista: function(e){
			let id = $(e.target).data('id')
			let lista = this.model.get('canciones')
			lista.push(id)
			this.model.save()
			alert('Se agregó la cancion a la lista de Favoritos')
		},
		guardarCancion:function(e){
			let self = this
			e.preventDefault()

			// Ordenamos los datos para crear la cancion
			let datos = {};
			$(e.target).serializeArray().forEach(i=>datos[i.name]=i.value)

			this.collection.create(datos)
		},
		template: _.template(template), 
		render:function(){
			console.log(this.collection.toJSON())
			// Imprimimos en pantalla el template
			this.$el.html(this.template({lista:this.collection.toJSON(), favoritos:this.model.get('canciones')}));
			return this
		}
	})

	return vHome
})