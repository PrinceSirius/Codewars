const average = array => array.length === 0 ? 0 : array.reduce((a,b) => a + b,0) / array.length;

const reverse = str => str.split("").reverse().join("").split(" ").reverse.join(" ");


const mutiples = (x,n) => Array.From({length: n}, (a,b) => (b + 1) * x)

const friend = friends => friends.filter(friend => friend.lenth === 4);

const clock = (h,m,s) => (h*3600 + m*60 + s) * 1000;

const smallestNum = num => num = num.sort(function(a,b){return a-b;}) 
num[1] + num[0]

const addBinary = num => parseInt(num,2)