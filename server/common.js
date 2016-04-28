if(Meteor.isServer) {

    Meteor.publish("posts", function () {
        return Posts.find();
    });
    Meteor.publish("projects", function () {
        return Projects.find();
    });

}