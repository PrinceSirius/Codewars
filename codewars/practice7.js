function sumTwoSmallestNumbers(numbers){
    numbers = numbers.sort(function(a,b){
        return a-b
    })
    return number[0] +  number[1]
}

const numbers = (a,b) => (a + b).toString(2)

const greeting = name => `Hello, ${name} how are you doing today`;

function squareDigits(num){
    let numStr = num + ""
    let total = ""

    for (let i in numStr){
        total += (parseInt(numStr[i]**2 + ""));
    }
    return parseInt(total)
}