Meteor.startup(function(){
    if(Meteor.users.find().count() ==0){
        Accounts.createUser({
            username: 'user',
            password: 'pass'
        });
    }
});
