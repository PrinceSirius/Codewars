function calculateBmi(bmi){
    let bmi = weight/height**2
    if(bmi < 18.5){
        return "underweight"
    } else if(bmi < 25){
        return "normal"
    } else if (bmi < 30){
        return "OverWeight"
    } else {
        return "Obese"
    }
}

// Thinking
// This function is simple,you really just need to know
// how the formula works and then the conditional is easy.

const binToDec = bin => parseInt(bin,2);

// Thinking
// This function converts a binary number given in a string
// to a number with parseInt changes the string to a number and then
// it is divided by 2

const smash = words => words.join("");

// Thinking
// This function takes words in an array and smashed them
// together .join() method makes this possible by smashing 
// the elements together,like a sandwich. lol

// Given an array pf integers as strings and numbers,
// return the sum of the array values as if all were numbers

const sumMix = x => x.reduce((a,b)=> a + (+b),0);

// Thinking I have to study reduce becuase i dont really know lol \
// all i know is (+b) turns the string to a number

function averageScore(s1,s2,s3){
    let score = (s1 + s2 + s3) / 3
    return score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F"
}

// Thinking
// This function calculates the average of 3 scores and returns a grade.
// score is the formula 
// im getting better with the ternary operator.

function countSheeps(arrayOfSheep){
    return arrayOfSheep.filter(boolean).length;
}

// Thinking 
// This function uses the filter method which filters through an array
// and returns a boolean

let find_average = array => {
    return array.length === 0 ? 0: array.reduce((a,b)=> a + b, 0) /array.length

}

// Thinking 
// This function calculates the average of numbers in a given list
// this same patteren array.reduce((a,b)=> 1 + b, 0) again
// must be a common pattern will furthur study.

const century = year => Math.ceil(year/100);

// Thinking 
// This function returns the century
// not sure what MathCeil does...maybe it rounds off the number
// Study

const areYouPlayingBanjo = name =>  name[0].toLowercase == "r" ? "plays " : "Does not play" + "banjo";

// Thinking
// This function checks the array and accepts lowercase first index of r

const num =(x,n) => Array.from({length: n},(a,b)=> (b + 1) * x);

// Thinking
// this function returns the first (n) mutilples of x
// N is getting checked by length while x is being mutipled by the mutiples...i think lol
// (b + 1) * x must be how to get its mutiples