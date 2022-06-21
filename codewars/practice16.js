const sumMix = (x,n) => Array.from({length: n}, (a,b) => (b + 1) * x);

const smash = word = word.join(" ");

const square = num => {
    let numStr= num + '';
    let total = '';
    for(i in numStr){
        total += (parseInt(numStr[i]**2 + ''))
    }
    return (parseInt(total))
}
function sumTwoSmallestNum(numbers){
    numbers = numbers.sort(function(a,b){
        return a-b
    })
    return numbers[0] + numbers[1];
}

let find_average = array => {
    return array.length === 0 ? 0 :
    array.reduce((a,b) => a + b, 0)/array.length;
}

const greet = name => `Hello, ${name} How are you doing today?`

const addBinary = (a,b) => (a + b).toString(2);

const getGrade = (s1,s2, s3) => {
    let s = (s1 + s2 + s3) / 3;
    return s >= 90 ? "A" : s >= 80 ? "B" : 
    s >= 70 ? "C" : s >= 60 ? "D" : "F";
}
