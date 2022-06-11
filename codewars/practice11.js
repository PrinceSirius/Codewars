const areYouPlayingBanjo = name => name + (name[0].toLowerCase == 'r' ? "plays" : "Does not play") + 'banjo';
const reverse = str => str.split('').reverse().join("").split(" ").reverse.join(" ");
const friend = friends => friends.filter(friend => friend.length === 4);
const addbinary = (a,b) => (a + b).toString(2);
const greet = name => `Hello, ${name} How are you doing today?`
const opposite = number => -number;
function sumTwoSmallestNumbers(numbers){
    numbers = numbers.sort(function(a,b) {
        return a-b;
    })
    return numbers[0] + numbers[1];
}
const century = year => Math.ceil(year/100);

const sumMix = (x,n) => Array.from({length: n}, (a,b) => (b + 1) * x);
