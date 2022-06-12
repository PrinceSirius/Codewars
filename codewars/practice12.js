let find_average = array => array.length === 0 ? 0 : array.reduce((a,b) => a + b, 0) / array.length;
const countSheep = arrayOfSheep => arrayOfSheep.filter(Boolean).length;