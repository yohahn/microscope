/**
 * Created by yohahn on 8/6/15.
 */
Meteor.publish('posts', function() {
    return Posts.find();
});
