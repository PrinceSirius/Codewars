const binToDec = bin => parseInt(bin,2);

const calculateBmi = bmi => {
    let bmi = weight/height**2
    
    bmi < 18.5 ? "underweight" : bmi < 25 ? "normal" : bmi < 30 ? "overweight" : "Obese"
}

function sumTwoSmallestNumbers(numbers){
    numbers = numbers.sort(function(a,b){
        return a-b
    } )
    return numbers[0] + numbers[1]

}

function square(number){
    let numStr = number + "";
    let total = "";
    for(let i in numStr){
        total += (parseInt(numStr[i]**2 + ""))
    }

    return (parseInt(total))

}