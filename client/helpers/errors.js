/**
 * Created by yohahn on 9/9/15.
 */
Errors = new Mongo.Collection(null);

throwError = function(message) {
    Errors.insert({message: message});
};
