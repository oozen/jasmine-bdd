describe('User', function () {
    var user;
    var comment;

    beforeEach(function () {
        user = new User();
        comment = new Comment();
    });

    it('should be able to login for a user', function () {
        user.login('user');
        expect(user.online).toBeTruthy();

    });

    describe('when a user adding a comment', function () {

        it('checks user login status, if it is online then allows adding new comment', function () {

            user.login('user');
            user.addComment(comment);
            expect(user.online).toBeTruthy();
            expect(user.comment).toEqual(comment);

        });
    });

    describe('when admin removing a comment', function () {

        it('checks if user role is admin. If its ok then removes comment', function () {

            spyOn(comment, 'remove');

            //user.online = true;
            user.role = 'admin';
            user.comment = comment;
            user.removeComment('some comment text');

            expect(user.role).toEqual('admin');
            expect(comment.remove).toHaveBeenCalled();
            

        });
    });


});