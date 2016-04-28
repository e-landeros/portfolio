Template.layout.onRendered(function(){
    this.$('.datetimepicker').datetimepicker();
});

Template.add_project.events({
    'submit .add_project_form': function() {
        var name = event.target.name.value;
        var type = event.target.type.value;
        var client = event.target.client.value;
        var description = event.target.description.value;
        var projectDate = event.target.projectDate.value;

        var file = $('#projectImage').get(0).files[0];

        if(file){
            fsFile = new FS.File(file);
            ProjectImages.insert(fsFile, function(err, result){
                if(!err){
                var projectImage = '/cfs/files/ProjectImages/'+ result._id;

                    //insert project
                    Projects.insert({
                        name:name,
                        description:description,
                        type:type,
                        client: client,
                        projectDate: projectDate,
                        projectImage: projectImage
                    });
                }
            });
        }else {
            //insert project
            Projects.insert({
                name:name,
                description:description,
                type:type,
                client: client,
                projectDate: projectDate
            });
        }
        FlashMessages.sendSuccess('project added');
        Router.go('/admin/projects');
        return false;
    }
});


Template.edit_project.events({
    'submit .edit_project_form': function() {
        var name = event.target.name.value;
        var type = event.target.type.value;
        var client = event.target.client.value;
        var description = event.target.description.value;
        var projectDate = event.target.projectDate.value;

        var file = $('#projectImage').get(0).files[0];

        if(file){
            fsFile = new FS.File(file);
            ProjectImages.insert(fsFile, function(err, result){
                if(!err) {
                    var projectImage = '/cfs/files/ProjectImages/' + result._id;

                    //update project
                    Projects.update({

                    }, {
                        $set: {
                            name: name,
                            description: description,
                            type: type,
                            client: client,
                            projectDate: projectDate,
                            projectImage: projectImage
                        }
                    });
                }
            });
        } else {
            //insert project
            Projects.insert({
                name:name,
                description:description,
                type:type,
                client: client,
                projectDate: projectDate
            });
        }
        FlashMessages.sendSuccess('project added');
        Router.go('/admin/projects');
        return false;
    }
});

Template.list_projects.events({
    'click .delete_project': function(event){
        if(confirm("Are you sure?")) {
            Projects.remove(this._id);
            FlashMessages.sendSuccess('Project deleted');
            return false;
        }
    }
});