/**
 * Created by yohahn on 8/6/15.
 */
Template.postsList.helpers({
    posts: function() {
        return Posts.find({author: 'bob-smith', category: 'JavaScript'});
    }
});
