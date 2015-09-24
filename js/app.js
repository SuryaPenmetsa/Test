requirejs.config({
	baseUrl:'js',
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
});


requirejs([ 'app/calcUtil'
            ,'app/formUtil'
           , 'app/multiselectUtil'
           , 'app/typeaheadUtil'
           , 'app/jsCoreFeatures'
           , 'app/backboneUtils'
          ],
          function(CalcUtil 
                , FormUtil
                , MultiSelect
                , Typeahead
                , JSCoreFeatures
                , BackboneUtils){ 
              
              
         //     BackboneUtils.test1();
              
              
                
//            var _j = new JSCoreFeatures('1');
//            JSCoreFeatures.prototype.showUserName = function(){
//                console.log('Hello ', this.userName);
//            }
//            _j.showUserName();
            
            // Typeahead.show();
              
              
               //MultiSelect.showMultiSelect();
                
              
           //     CalcUtil.showView();
//                FormUtil.showFormWithNoModel();
              
//              FormUtil.showFormWithModel();
              FormUtil.showApplications();
              
              
});

