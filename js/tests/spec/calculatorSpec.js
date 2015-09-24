define(['app-models/calculator'], function(CalcModel){
	describe('Calculator Model', function(){
		it('defult size should be 101', function(){
			var _c = new CalcModel();
			expect(_c.get('size')).toEqual(101);
		});
	});
    describe('A spec using fail function', function(){
            var foo= function(x, callBack){
                if(x){
                    callBack();
                }
            };
        
        it('should not call the callback', function(){
                foo(false, function(){
                    fail('callback has been handled.');
                });
           });
        xit('this is pending ', function(){
            
        });
    });
    
    describe('A spy', function(){
        var foo, bar = null;
        beforeEach(function(){
            foo= {
                setbar: function(value){
                    bar = value;
                }
            }
        });
    });
    
});