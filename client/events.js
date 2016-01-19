Template.mainContent.rendered = function() {
    if(!this._rendered) {
        this._rendered = true;
        console.log('it works');
    }
};

Template.treeForm.events({
    'click a': function(e, tpl) {
        console.log('it works');
    },
    "submit #addBranch": function (event) {
        // Prevent default browser form submit
        event.preventDefault();
        // Get value from form element
        var title = event.target.branch_title.value;
        var name = event.target.branch_name.value;
        var parent = event.target.append_to.value;

        // Insert a branch into the collection
        Branches.insert({
            branch_title: title,
            branch_name: name,
            branch_parent: parent
        });

        // Clear form
        event.target.branch_title.value = "";
        event.target.branch_name.value = "";
        event.target.append_to.value = "";
    }
});
