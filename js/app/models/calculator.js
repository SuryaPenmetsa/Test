define(['backbone'], function(Backbone){
	
	return Backbone.Model.extend({
		defaults:{
		 size: 101
		},
		url:'https://query.yahooapis.com/v1/public/yql?q=show%20tables&format=json&diagnostics=true&callback=',
		
	});

});