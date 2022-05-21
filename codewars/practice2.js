const smash = words => words.join(" "); // I got this correct on the FIRST TRY!!!!!!!!!!!!!!!!! join takes the words and smashes them together creating sentences.

const sumMix = x => x.reduce((a,b) => a + (+b),0) // Couldn't remember how to do this will revist!

const  arr = (x,n) => Array.from({length: n}, (a,b) => (b + 1) * x) // Math problems yuck lol i have to work on this!

function countSheeps(arrayOfSheep){
    return arrayOfSheep.filter(Boolean).length; // Studying
}

function grades(s1,s2,s3){
    let s = (s1 + s2 + s3) / 3;
    return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F" // First Try!!!! conditionals are getting easy to me.
    
    
}

function areYouPlayingBango(name){
    return name +(name[0].toLowerCase() == "r" ? 'plays' : 'does not play') + "banjo";
}

let find_average = array => {
    return array.length === 0 ? 0 : array.reduce((a,b)=> a+b,0) / array.length; // Studying  
}

const sumMix2 = x => x.reduce((a,b)=> a+(+b),0)

function countSheeps(arrayOfSheep){
    return arrayOfSheep.filter(Boolean).length;
} 

const arr2 = (x,n) => Array.from({length: n}, (a,b) => (b + 1) * x)

function areYouPlayingBanjo(name){
    return name + (name[0].toLowerCase == 'r' ? 'plays' : 'does not play') + banjo;
}

let find_average2 = array => {
    return array.length === 0 ? 0 : array.reduce((a,b) => a + b, 0)
}

const century = year => Math.ceil(year/100);

const arr3 = (x,n) => Array.from({length: n}, (a,b)=> (b + 1) * x)

