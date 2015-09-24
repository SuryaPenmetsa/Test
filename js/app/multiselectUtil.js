define(['jquery', 'underscore', 'bootstrap-multiselect'],
      function($, _, MultiSelect){
        return {
            showMultiSelect : function(){    
                
                 $('#example-getting-started').append($("<option/>", {
                    value: 'xyz',
                    text: 'xyz'
                }));
                
                $('#example-getting-started').multiselect({
                    enableClickableOptGroups:true,
                    checkboxName: 'multiselect',
                     
                    onChange:function(option, checked, select){        
                        console.log($(option.parent()));
                         _.each(option.parent().children(), function(element, index, list){
                        
                            if(element.id == option[0].id){
                                console.log('match', element.id);
                            }
                            else{ 
                                if(checked){
                                    $(element).prop('disabled', true);
                                }
                                else{
                                    $(element).prop('disabled', false);
                                }
                                 
                            }
                        }); // end _.each
                         
                         $('#example-getting-started').multiselect('refresh');
                    }, // end onchange
                }); 
                },
        
        } // end return...
      
      });