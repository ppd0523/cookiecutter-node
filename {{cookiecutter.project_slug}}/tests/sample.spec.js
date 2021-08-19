import {describe, expect, test} from '@jest/globals';


describe("App Test", function(){
    describe("First suite", function(){
        test("A function", ()=>{
            expect(1+1).toBe(2);
            expect(2**2).toBe(4);
            expect(10-7).toBe(5);
        })

        test.todo("B function");
    });
   
})