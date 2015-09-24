require.config({
	
	baseUrl: '/js',
	paths:{ 
		'backbone' : 'lib/backbone',
		'underscore' : 'lib/underscore',
		'jquery' : 'lib/jquery',
		'jasmine': ['lib/jasmine'],
		'jasmine-html' : ['lib/jasmine-html'],
		'jasmine-boot' : ['lib/boot'],
		'jasmine-jquery' : ['lib/jasmine-jquery'],
		'spec' : 'tests/spec',
		'app-models' : 'app/models',
		'app-views' : 'app/views'
		
	},
	shim:{
		'jasmine-html' :   {deps: ['jasmine'] },
		'jasmine-boot' :   {deps: ['jasmine', 'jasmine-html']},
		'jasmine-jquery' : {deps: ['jasmine', 'jasmine-html' , 'jasmine-boot']}
	}
});


require(['jasmine-boot'], function () {
  require(['spec/calculatorSpec'], function(){
    //trigger Jasmine
    window.onload();
  });
});