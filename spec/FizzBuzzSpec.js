var number= Math.floor(Math.random()*100);

describe("FizzBuzz", function(){
    it("if the number is divisible by 3 then it should print fizz",function(){
        if(expect(FizzBuzz(number)).toEqual("Fizz")){
            console.log(number);
        };
    });

    it("if the number is divisible by 5 then it should print buzz",function(){
        if(expect(FizzBuzz(number)).toEqual("Buzz")){
            console.log(number);
        };
   
    });

    it("if the number is divisible by 3 and 5 then it should print ", function(){
        if(expect(FizzBuzz(number)).toEqual("FizzBuzz")){
            console.log(number);
        };
    });

    it("if the number is not divisible by 3 and 5 ", function(){
        if(expect(FizzBuzz(number)).toEqual(number)){
        console.log(number);
    };

    
    });

})
