Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});

if(Meteor.isClient) {
    Meteor.subscribe("projects");
    Meteor.subscribe("posts");
}