/**
 * Created by yohahn on 8/6/15.
 */
Router.configure({
    layoutTemplate: 'layout',
    waitOn: function() { Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'postsList'});
Router.route('/posts/:_id', {
    name: 'postPage',
    data: function() { return Posts.findOne(this.params._id); }
});
