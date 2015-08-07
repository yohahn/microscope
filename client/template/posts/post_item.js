/**
 * Created by yohahn on 8/6/15.
 */
Template.postItem.helpers({
    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    }
});
