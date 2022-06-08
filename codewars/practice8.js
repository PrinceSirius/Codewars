const noSpace = x => x.split(" ").join("");

const addBinary = (a,b) => (a+b).toString(2);

const arr = array => array.reduce((a,b) => a + (+b),0);

const clock = (h,m,s) => (h*3600 + m*60 + s) *  1000;

const greeting = name => "Hello, ${name} how are you doing today?";

let find_average = array => array.length == 0 ? 0 : array.reduce((a,b) => a + b, 0 ) / array.length;

const sum = (x,n) => Array.from({length:n}, (a,b) => (b +1) * x);

const square = number => {
    let numStr = number + ""
    let total = ""

    for ( let i in numStr){
        total += (parseInt(numStr[i]**2 + ""))
    }
    return parseInt(total)
}

