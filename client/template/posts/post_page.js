/**
 * Created by yohahn on 9/21/15.
 */
Template.postPage.helpers({
    comments: function() {
        return Comments.find({postId: this._id});
    }
});
