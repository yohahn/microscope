/**
 * Created by yohahn on 8/6/15.
 */
Posts = new Mongo.Collection('posts');

Posts.allow({
    insert: function(userId, doc) {
        // only allow posting if you are logged in
        return !! userId;
    }
});
