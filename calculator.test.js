describe('Calculator', function () {
    describe('add', function () {
        it('should add two numbers', function () {
            expect(new Calculator().add(1, 2)).toEqual(3);
        });
    });
    describe('substract', function () {
        it('should substract two numbers', function () {
            expect(new Calculator().add(2, 1)).toEqual(1);
        });
    });
});
