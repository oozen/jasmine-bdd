describe('MathOperations', function () {
    var calc;
    //This will be called before running each spec

    beforeEach(function () {
        calc = new MathOperations();
    });

    describe('when calc is used for performing basic math operations', function () {

        //Spec for sum operation
        it('should be able to calculate sum of 5 and 7', function () {
            expect(calc.sum(5, 7)).toEqual(12);
        });

        //Spec for substract operation. EXCLUDED!
        xit('should be able to calculate sum of 5 and 7', function () {
            expect(calc.substract(5, 7)).toEqual(-2);
        });

        //Spec for multiply operation
        it('should be able to  multiply 3 and 12', function () {
            expect(calc.multiply(3, 12)).toEqual(36);
        });

        //Spec for factorial operation for positive number
        it("should be able to calculate factorial of 9", function () {
            expect(calc.factorial(9)).toEqual(362880);
        });

        //Spec for factorial operation for negative number. EXPECT KISMAINA DİKKAT! BURASI THROW ERROR SPEC'LERİ İÇİN GEREKLİDİR
        it('should be able to throw an error in factorial operation when the number is negative', function () {
            expect(function () {
                calc.factorial(-7)
            }).toThrowError(Error);
        });
    });

});