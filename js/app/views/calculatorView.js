define(['backbone'], function(Backbone){
	return Backbone.View.extend({
		el:'#calculator',
		render: function(){
			
			var template = _.template($('#calculator_template').html(),{});
			
			this.$el.html(template);
		},
		events:{
			'click #add_button' : 'onClick'
		},
		onClick:function(){
			console.log('clicked');
			var a= Number($('#add_a').val()),
				b = Number($('#add_b').val());
			$('#add_result').html(a+b);
		}
	});

});