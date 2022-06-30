const century = year => Math.ceil(year/100);

const noSpace = x => x.split(" ").join("");

const sumMix = x => x.reduce((a,b) => a + (+b),0);

const areYouPlayingBanjo = name => name + (name[0].toLowerCase() === 'r' ? "plays" : "does not play") + "banjo";

const sheepCount = arrayOfSheep => arrayOfSheep.filter(Boolean).length;

const opposite = number => -number;

const square = num => {
    let numStr = num + '';
    let total = "";
    for( i in numStr){
        total += (parseInt(numStr[i]**2 + ''))
    }
    return parseInt(total)
}