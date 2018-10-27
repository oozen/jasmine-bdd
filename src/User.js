function User() { };

User.prototype.login = function (role) {
    this.online = true;
    this.role = role;
}

User.prototype.addComment = function (comment) {
    if (!this.online) {
        throw new Error('You have to log in to add a new comment!');
    }
    // Comment func
    this.comment = comment
}

User.prototype.removeComment = function (commentText) {
    if (this.role === 'admin') {
        // Comment func
        this.comment.remove(commentText);
    } else {
        throw new Error('Only admin can judge us!');
    }
}

function Comment() {}

Comment.prototype.remove = function (commentText) {
    this.removingComment = commentText;
}