function calculateBmi(bmi){ // Correct
    let bmi = weight / height **2;

    if (bmi < 18.5){
        return 'Underweight'
    } else if (bmi < 25){
        return "Normal"
    } else if (bmi < 30){
        return 'Overweight'
    } else {
        return 'Obese'
    }
}

const binToDec = bin => parseInt(bin,2); // Correct 

const sumMix = x => x.reduce((a,b)=> a + (+b),0) // I had got this one wrong, need to add Reduce method to Anki, once i fully understand the method.

function avgGrade (s1,s2,s3){
    let sum = (s1 + s2 + s3) / 3

   return sum >= 90 ? "A" : sum >= 80 ? "B" : sum >= 70 ? "C" : sum >= 60 ? "D" : "F" // Partially got correct,forgot the addition signs to calculate the average.
}

const smash = words => words.join('') // Partially got this one correct i just couldnt visualize the code. But i knew the method join was going to be used.

function countSheeps(arrayOfSheep){
    return arrayOfSheep.filter(Boolean).length; // The Boolean part confuses me so much. i kinda understand the filter method but not really. is it really just filtering out the false returns?
}

const Mixarray = x => x.reduce((a,b)=> a + (+b),0); // This is the one i want to study  i dont really understand the last part of this code. 

let find_average = array => {
    return array.length === 0 ? 0 : array.reduce((a,b)=> a + b,0) /array.length; // The previous codewar had the same ending  i wonder if this is one of those patterns sensei was talking about.
}

const countBy = (x,n) => {
    array.from({length: n}, (a,b)=> (b + 1) * x) // i have to reads the documentation for From method or is this a creative way to do this? start to stick to our solutions!
}

function areYouPlayingbanjo(name){
    return name + (name[0].toLowercase() == 'r' ? 'plays' : 'does not play ') + banjo; // This one is definitely one of my all time difficult ones lol sheeeeesh  
}

