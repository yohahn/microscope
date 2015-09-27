/**
 * Created by yohahn on 9/27/15.
 */
Template.registerHelper('pluralize', function(n, thing) {
    // fairly stupid spluralizer
    if (n === 1) {
        return '1 ' + thing;
    } else {
        return n + ' ' + thing + 's';
    }
});
Ø