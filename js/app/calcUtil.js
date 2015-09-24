define(['app/models/calculator'
       ,'app/views/calculatorView']
       , function(CalculatorModel, CalculatorView){
       
           return {
                showView:function(){
                      var _calcModel = new CalculatorModel();
                    _calcModel.fetch();
                
                    
                    var _calcView = new CalculatorView({
                    model:_calcModel});
                    
                    _calcView.render(); 
               
               },
           }
       
       });