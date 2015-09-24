define([], 
       function jsCoreFeatures(){
           console.log('in jsCoreFeatures', arguments);
            function Container(){
                this.userName = 'Surya';
                console.log('in Container', arguments);
            }
           return Container;
       });