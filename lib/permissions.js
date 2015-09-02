/**
 * Created by yohahn on 9/2/15.
 */
ownsDocument = function(userId, doc) {
    return doc && doc.userId === userId;
}
