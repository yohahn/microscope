/**
 * Created by yohahn on 9/9/15.
 */
Template.errors.helpers({
    errors: function() {
        return Errors.find();
    }
});

Template.error.onRendered(function() {
    var error = this.data;
    Meteor.setTimeout(function() {
        Errors.remove(error._id);
    }, 3000);
});
