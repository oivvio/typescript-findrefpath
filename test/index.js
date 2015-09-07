describe('one', function () {
    it('should pass', function (done) {
        done();
    });
    it('should not pass', function (done) {
        throw "Some error";
        done();
    });
});
