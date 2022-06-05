const countBy = (x,n) => Array.from({length: n}, (a,b) => (b + 1) * x);

// This function is suppose to return n multiples of x
// array.from creates another array and returns the value in that array.

const noSpace = x = x.split(" ").join("");

// This function removes spaces from the array and returns the array.

const friend = friends => friends.filter(friend => friend.length === 4);

const clock = (h,m,s) => (h*3600 + m*60 + s) * 1000;

const scores = (s1,s2,s3) => {
    let score = (s1 + s2 + s3) / 3;
    return score => 90 ? "A" : score => 80 ? "B" : score => 70 ? "C"
    : score => 60 ? "D" : "F"
}

const reverse = array => array.split("").reverse().join("").split(" ").reverse.join(" ");

const sum = numbers => numbers.reduce((a,b) => a + (+b),0)

const areYouPlayingBanjo = (name) => name + (name[0].toLowerCase() === 'r' ? "Plays" : "Does not play") + "banjo"

const countSheeps = (arrayOfSheeps) => arrayOfSheeps.filter(Boolean).length;

const opposite = number => -number;

const smash = words => words.join(" ");

let number_average = array => {
    array.length == 0 ? 0 : array.reduce((a,b)=> a + b,0) / array.length
}

function sumTwoSmallestNumbers(numbers) {
    numbers = numbers.sort(function(a,b){
        return a-b
    })
    numbers[0] + numbers[1]
}

const century = year => Math.ceil(year/100);

function squareDigits(num){
    let numStr = num + "";
    let total = "";
    for(let i in numStr){
        total += (parseInt(numStr[i]**2 + ""))
    }
    return parseInt(total);
}