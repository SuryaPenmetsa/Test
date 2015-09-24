{
//    baseUrl: "../js",
//    //appDir: "..",
////    dir: "dist",
//    name: 'app',
//    out: 'app-built.js',
//    paths: {
//        app: '../app',
//        jquery: 'lib/jquery'
//    },
        
    baseUrl:'../js',
    name: 'app',
	paths:{ 
        'jquery' : ['lib/jquery'],
        'bootstrap' : ['lib/bootstrap'],
        'bootstrap-multiselect' : ['lib/bootstrap-multiselect'],
        'underscore' : ['lib/underscore'],
        'typeahead' : ['lib/typeahead'],
        'backbone' : ['lib/backbone'],
        'backbone-forms' : ['lib/backbone-forms'],
		'jasmine': ['lib/jasmine'],
		'jasmine-html' : ['lib/jasmine-html'],
		'jasmine-boot' : ['lib/boot'],
		'jasmine-jquery' : ['lib/jasmine-jquery'],
		'spec' : 'tests/spec',
		'app-models' : 'app/models',
		'app-views' : 'app/views',

		
	},
    shim:{
	   'backbone-forms' :   {deps: ['jquery','underscore', 'backbone'] },
       'bootstrap' : {deps: ['jquery']},
       'bootstrap-multiselect' : {deps: ['jquery', 'bootstrap']},
       'typeahead' : {deps:['jquery']}
    }
}