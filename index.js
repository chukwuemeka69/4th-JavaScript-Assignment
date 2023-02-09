// #####################################################################################
// ? Question 1:Multi dimensional Arrays
var arr = [ [1, 2, 3],[4, 5, 6],7,8,9,[ [10, 11, 12, [13, 4, 112] ], 136, 14] ];
// *print out these numbers (10,8,13,136 and 4)from the array provided above 
alert (` ${arr[5][0][0]}, ${arr[3]}, ${arr[5][0][3][0]}, ${arr[5][1]} and ${arr[1][0]}`)
// ###################################################################################
//?Question2: Fill in the blank spaces with the elements in the sentence array
// *I am a ______ developer at ________ and i love ______________
const sentence = ["javascript", "web", "Capacity Bay"];
// required output=>I am a web developer at capacity bay and i love javascript
alert(`I am a ${sentence[1]} developer ${sentence[2]} and i love ${sentence[0]}`)
// ##############################################################################################
// ?Question 3 : Use the bracket notation to print out 4th to the last character of "Generalization"
let word = "Generalization";
forthToLastCharacter =  word.slice (3,word.length);
alert(forthToLastCharacter);
// // ####################################################################################################
// // ? Question 4 : Create an array and populate it with these strings
const fruits = ["orange","apple","guava", "lemon"];
// // Add these strings at the beginning of the array you created above
// // "pea", "banana";
fruits.unshift ("pea","banana");
alert (fruits);
// // Add these strings at the end of the array you created above.
// // "Avocado", "mango";
fruits.push("Avocado", "mango");
alert (fruits);

// #################################################################################################################
// Section 2: Fizz Buzz Game
// 1. Write a program that prints out numbers in an array whenever we run a function
const arrNumber = [ ];
cnt = 1;
function writeNum(){
    arrNumber.push(cnt%3?(cnt%5?cnt:"Buzz"):(cnt%5?"Fizz":"FizzBuzz")); cnt+=1; 
    alert ( `[ ${arrNumber} ]`);
}
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();

// a. Now check if any of the number outputting is divisibel by 3 print "Fizz"
// i.e  writeNum() //will output = [1]
// writeNum() //will output = [1,2]

// writeNum() //will output = [1,2,"Fizz"]  because 3 is divisible by 3 

// writeNum() //will output = [1,2,3,4] etc

// b. Now check if any of the number outputting is divisible by 5 print "Buzz"
// i.e  writeNum() //will output = [1]
// writeNum() //will output = [1,2]

// writeNum() //will output = [1,2,"Fizz"]  because 3 is divisible by 3 

// writeNum() //will output = [1,2,"Fizz",4]
// writeNum() //will output = [1,2,"Fizz",4,"Buzz"]   because 5 is divisible by 5


// c. Now check if any of the number outputting is divisible by both 3 & 5 print "FizzBuzz"
// i.e  writeNum() //will output = [1]
// writeNum() //will output = [1,2]

// writeNum() //will output = [1,2,"Fizz"]  because 3 is divisible by 3 

// writeNum() //will output = [1,2,"Fizz",4]
// writeNum() //will output = [1,2,"Fizz",4,"Buzz",.........]   because 5 is divisible by 5
// writeNum() //will output = [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"] because 15 is divisible by both 3 & 5


// NB: Follow instructions step by step and you'll easily solve these questions
