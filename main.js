let name = "ashwinder"
console.log(name);


// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1,num2) 
{
    var lar = 0;
    if(num1 > num2)
    {
        
        lar = num1;
        
    } else {
      
        lar = num2;
   
    }
   return lar;
    // Your answer here
}
console.log(max(3,4));


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(x,y,z){
    let max = 0;
    if ((x >= y) && (x >= z)){
        max = x;
    } else if((y >= x) && (y >= z)) {
        max = y;
    } else {
        max = z;
    } 
    
    return max;

    // Your answer here
}

console.log(maxOfThree(3,5,6));
// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    
    if (char === "a" || char === "e" ||char === "i" || char === "o" || char === "u"){
        return true;
    } else { 
        
    return false
    
    }
    
    // Your answer here
}
console.log(isVowel("e"));

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sumOfNums(num1, num2){
    
    let sumOfNums = num1 + num2;
    return sumOfNums;
    
}
console.log(sumOfNums(3,5));

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function aver(num1, num2, num3){
    let sum = num1 + num2 + num3;
    let aver = sum / 3;
    return aver;
    
} console.log(aver(3,6,9));



// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(string){
    let getLength = string.length;
    return getLength;
} console.log(getLength("gargi"));

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(num1, num2){
    if ( num1 > num2){
        return false;
    }else {
        return true;
    }
}console.log(greaterThan(6,9));

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(name){
    let greet = "hello" + " " + name + "!";
    return greet;
}
console.log(greet("ashwinder"));


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
function madlib(word1,word2,word3){
    let sentence = word1 + " " + "brown" + " " + word2 + " " + "jumps" + " " + "over" + " " + "the" + " " + word3;
    return sentence;
}
console.log(madlib("quick","fox","fence"));
