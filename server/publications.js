/**
 * Created by yohahn on 8/6/15.
 */
Meteor.publish('posts', function(author) {
    return Posts.find({flagged: false, author: author});
});

// Publishing Full Collections
Meteor.publish('allPosts', function() {
    return Posts.find();
});

// Publishing Partial Collections
Meteor.publish('somePosts', function() {
    return Posts.find({'author': 'Tom'});
});

// Publishing Partial Properties
Meteor.publish('allPosts', function() {
    return Posts.find({}, {fields: {
        date: false     // exclude date field
    }});
});
Meteor.publish('tomPosts', function() {
    return Posts.find({'author':'Tom'}, {fields: {
        date: false     // exclude date field
    }});
});
