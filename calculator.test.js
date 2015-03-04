describe('Calculator', function () {
    describe('add', function () {
        it('should add two numbers', function () {
            expect(new Calculator().add(1, 2)).toEqual(3);
        });
    });
});
