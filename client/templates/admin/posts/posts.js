Template.add_post.events({
    'submit .add_post_form': function(event){
        var title = event.target.title.value;
        var body = event.target.body.value;

        //insert post
        Posts.insert({
           title: title,
            body: body
        });

        FlashMessages.sendSuccess('Post Added');
        Router.go('/admin/posts');

        //prevent submit
        return false;
    }
});

Template.edit_post.events({
    'submit .edit_post_form': function(event) {
        var title = event.target.title.value;
        var body = event.target.body.value;

        //insert post
        Posts.update({
            _id: this._id
        }, {
            $set:{
                title: title,
                body: body
            }
        });

        FlashMessages.sendSuccess('Post Updated');
        Router.go('/admin/posts');

        //prevent submit
        return false;
    }
});

Template.list_posts.events({
    'click .delete_post': function(event){
        if(confirm("Are you sure?")) {
            Posts.remove(this._id);
            FlashMessages.sendSuccess('post deleted');
            return false;
        }
    }
});