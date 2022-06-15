function sumtwosmallestNumbers(numbers) {
    numbers = numbers.sort(function(a,b){
        return a-b
    })
    return numbers[0] + numbers[1]
}

const sumMix = x => x.reduce((a,b) => a + (+b),0)