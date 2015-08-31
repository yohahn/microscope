/**
 * Created by yohahn on 8/6/15.
 */
Router.configure({
    layoutTemplate: 'layout',
    waitOn: function() { Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'postsList'});
