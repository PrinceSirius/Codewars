const friends = friend => friend.filter(friend.length === 4);

// Thinking 
// I almost had thos correct i just missed the .length method
// this function is checking if the friends name is exsctly 4 characters
// you have to use the filter plus .length to check for these.

const reverse = array => array.split("").reverse().join("").split(" ").reverse.join(" ");

const areYouPlayingBanjo = name => name + (name[0].toLowerCase === "r" ? "Plays" : "Does not play") + "banjo";

const mickey = (x,n) =>  Array.from({length: n}, (a,b) => (b + 1) * x);

const century = year => Math.ceil(year/100);

let number_average = array => array.length === 0 ? 0 : array.reduce((a,b)=> a + b, 0)

const opposite = number => -number;

function sumTwoSmallestNumbers(numbers){
    numbers = numbers.sort(function(a,b){
        return a-b
    })
    return numbers[0] + numbers[1]
}

const noSpace = x =>  x.split(" ").join("");

function squareDigits(num){
    let numStr = num + ""
    let total =  ""
    for(let i in numStr){
        total += (parseInt(numStr[i]**2 + ""));
    }
    return parseInt(total);
}

function sumTwoSmallestNumbers(numbers){
    numbers = numbers.sort((function(a,b){
        return a-b
    }))
    return numbers[0] + numbers[1];
}

const noSpace1 = x = x.split(" ").join("");

const clock = (h,m,s) => (h*3600 + m*60 + s) * 1000;

const squareDigits2 = num => {
    let numStr = num + "";
    let total = "";
    for(let i in numStr){
        total += (parseInt(numStr[i]**2 + ""))
    }
    return (parseInt(total))
}

const greeting = name => `Hi, ${name} how are  you doing today?`

function sumTwoSmallestNumbers1(numbers){
    numbers = numbers.sort((function(a,b){
        return a-b
    }))
    return numbers[0] + numbers[1];
}

const noSpace2 = x => x.split(" ").join("");

const addBinary = (a,b) => (a + b).toString(2);

