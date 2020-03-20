describe("FizzBuzz", function(){
    it("if the number is divisible by 3 then it should print fizz",function(){
        expect(FizzBuzz(3)).toEqual("Fizz");
    });

    it("if the number is divisible by 5 then it should print buzz",function(){
        expect(FizzBuzz(5)).toEqual("Buzz"); 
    });

    it("if the number is divisible by 3 and 5 then it should print ", function(){
        expect(FizzBuzz(15)).toEqual("FizzBuzz");
    });

    it("if the number is not divisible by 3 and 5 ", function(){
        expect(FizzBuzz(2)).toEqual(2);
    });

}
)
