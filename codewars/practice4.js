const gradeScore = (s1,s2,s3) => {
    let score = (s1 + s2 + s3) / 3
    return score => 90 ? "A" : score => 80 ? "B" : score => 70 ? "C" : score => 60 ? "D" : "F";
}

// Thinking
// This problem is becoming easier and easier!
// to find a average in Js was challenging at first but we will keep pushing.

const countSheeps = (arrayOfSheep) => arrayOfSheep.filter(Boolean).length

// Thinking 
// the filter method filters through the boolean length and returns the value.
const sumMix = x => x.reduce((a,b) => a + (+b),0)

// Thinking
// Reduce stay kicking my ass but atleast i can finish the other half of the problem

const countBy = (n,x) => Array.from({length: n}, (a,b)=> (b + 1) * x)

// Thinking 
// array.from creates a new array from the object.

function areYouPlayingBanjo(name){
    return name + (name[0].toLowercase() == "r" ? "plays" : "does not play") + banjo;
}


const century = year => Math.ceil(year/100)

let find_average = array => {
    return array.length === 0 ? 0 : array.reduce((a,b)=> a + b, 0) /array.length
}

const sumNum = (x,n) => Array.from({length: n}, (a,b)=>(b + 1) * x);

const  friend = friends => friends.filter(friend => friend.length === 4);

const opposite = number => -number

function reverseWords(str){
    return str.split("").reverse().join("").split(" ").reverse.join(" ");
}

const areYouPlayingBanjo2 = name => name + (name[0].toLowercase == "r" ? "plays" : "Does not play") + "banjo"

let find_average2 = array => array.length === 0 ? 0 : array.reduce((a,b)=> a + b,0) / array.length

const past = (h,m,s) => (h*3600 + m*60 + s) * 1000;

const friend1 = friends => friends.filter(friend => friend === 4)

const opposite1 = number => -number;

function reverse1(array){
    return array.split("").reverse().join("").split(" ").reverse.join(" ");
}

function noSpace(x){
    return x.split(" ").join("");
}

const sumMix2 = (x,n) => Array.from({length: n}, (a,b)=> (b + 1) * x);

function squareDigits(num){
    let numStr = num + ""
    let total = ""
    for(let i in numStr){
        total += (parseInt(numStr[i]**2 + ""));
    }
    return parseInt(total);
}

const past1 = (h,m,s) => (h*3600 + m*60 + s) * 1000

const greet = name => `Hello, ${name} How are you doing today?`;

function sumTwoSmallestNumbers(numbers){
    numbers = numbers.sort(function(a,b){
        return a-b
    })
    return numbers[0] + numbers[1]
}

let find_average3 = array => (array.length === 0 ? 0 : array.reduce((a,b)=> a + b, 0 )) / array.length

const friend3 = friends => friends.filter(friend => friend === 4)

const opposite2 = number => -number;

function squareDigits2(num){
    let numStr = ""
    let total = ""
    for(let i in numStr){
        total += (parseInt(numStr[i]**2 + ""));
    }
    return parseInt(total)
}