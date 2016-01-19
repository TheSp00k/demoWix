Template.treeForm.helpers({
    branches: function () {
        //var allBranches = Branches.find({}).fetch();
        var allBranches = Branches.find({});
        //var resultTree = {};
        //console.log(allBranches);
        //$.each(allBranches, function(index1, data1){
        //    $.each(allBranches, function(index2, data2){
        //        if (data1.branch_parent == data2.branch_name) {
        //            resultTree[data1.branch_parent][index1] = data2;
        //        } else {
        //            resultTree[data1.branch_parent][index1] =
        //        }
        //    });
        //});
        return allBranches;
    }
});