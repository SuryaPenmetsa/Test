define(['jquery',
        'backbone-forms'], 
       function($, Forms){
           return  {
               
            showFormWithNoModel: function(){
            
                var form = new Backbone.Form({
                        //Schema
                        schema: {
                            id:         'Number',
                            name:       'Text',
                            password:   'Password'
                        },
                    
                        //Data to populate the form with
                        data: {
                          id: 123,
                          name: 'Rod Kimble',
                          password: 'cool beans'
                        }
                    }).render();
                   
                   $('body').append(form.el);
            },
            
            showFormWithModel: function(){
            
                var Address = Backbone.Model.extend({
                    schema:{
                        street: 'Text',
                        city:  'Text',
                        state: 'Text',
                        zip: 'Text'
                    }
                });
                var User = Backbone.Model.extend({
                        schema: {
                            title:      { type: 'Select', options: ['Mr', 'Mrs', 'Ms'] },
                            name:       'Text',
                            email:      { validators: ['required', 'email'] },
                            birthday:   'Date',
                            password:   'Password',
                            address:    { type: 'NestedModel', model: Address }
                        } 
                    });
                
                var user = new User();
                var form = new Backbone.Form({
                    model:user
                }).render();
                
                form.on('name:change', function(form, editor, extra){ 
                           var errors= form.commit();
                           if(!errors){
                                console.log(form.model.get('name'));
                           }
                           else{
                                console.log('Validation Errors: ', errors);
                           }

                        });
               
                $('body').append(form.el);
            },
               
            showApplications:function(){
                
//                var Application = Backbone.Model.extend({
//                        schema: {
//                            name:   {
//                                        type:'Checkboxes', 
//                                        options:[ {label:'NED', val:'NED'} ]},
//                            title:  { type: 'Select', options: ['Mr', 'Mrs', 'Ms'] },
//                        } 
// 
//                    });
//          
                var _appsJson = [ {name:'app1',
                                    roles:[{group:'1:Role', name:'Analyst'},
                                          {group:'1:Role', name:'editor'},
                                          {group:'1:Role', name:'reader'}]
                                    }, 
                                    {name:'app2',
                                        roles:[{group:'2:Role', name:'Analyst'},
                                              {group:'2:Role', name:'editor'},
                                              {group:'2:Role', name:'reader'}]
                                    }, 
                                    {name:'app3',
                                        roles:[{group:'3:Role', name:'Analyst'},
                                              {group:'3:Role', name:'editor'},
                                              {group:'3:Role', name:'reader'}]
                                    }, 
                                
                                ];
                
                var Application = Backbone.Model.extend();    
                
                
                var _apps =new Backbone.Collection(_appsJson,
                                                    {model: Application});
                
                var altFieldTemplate = _.template('<div class="altField" data-editor></div>');
                
                
                
                var ApplicationForm = Backbone.Form.extend({
                     schema: {
                            name:   {   type:'Checkboxes', 
                                        options:[]
                                    },
                            title:  { type: 'Select', options:[] },
//                            title:  { type: altFieldTemplate , options: ['Mr', 'Mrs', 'Ms'] },
                         
                        },
                    template: _.template($('#applications_template').html()),
                    templateData : function(){
                        return this.model.attributes;
                    },
                    
                });
                
                _.each(_apps.models, function(element,index,list){
                    //console.log(element);    
                    var form = new ApplicationForm({
                        model: element
                    });
                    form.schema.name.options = [{label: element.get('name'), val:element.get('name')}];
//                    form.schema.title.options = [
//                        { group: 'Cities',  options: ['Paris', 'Beijing']},     
//                        { group: 'Food',    options: '<option>Bread</option>'}
//                    ];
                      //form.schema.title.options = element.get('roles');
                    
                    var roles = element.get('roles');
                    
                    form.schema.title.options.length=0;
                    
                    
                    _.each(roles, function(element, index, list){
                        
                        form.schema.title.options.push({group:element.group , 
                                                            options: '<option>' + element.name+ '</option>'
                                                        // options: '<option><input type="checkbox" name="1" value="' + element.name +'" id="' + element.name+ '"/><label for="'+ element.name+ '">' + element.name+ '</label></option>'
                                                       });
                    });
                    
                    console.log(form.schema.title.options);
                           
                    form.render(); 
                    $('body').append(form.el);
                }); 

            },           
             
               
               
           } // close return statement
           });