define(['backbone'], function(Backbone){
 
    return {
        test1: function(){
            var friends = new Backbone.Collection([
                {fname: 'mike' , lname:'maier'},
                {fname: 'kirpal' , lname:'khalsa'},
                {fname: 'sunny' , lname:'vegara'},
                {fname: 'henry' , lname:'olson'},
                {fname: 'donna' , lname:'leung'},
            ]);
        
            console.log('friends:', friends);
        
            console.log(friends.where({fname:'kirpal'}));
        }
    }

});