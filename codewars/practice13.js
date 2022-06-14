const noSpace = x => x.split(" ").join("");
const clock = (h,m,s) => (h*3600 + m*60 + s) * 1000;
const squareMe = num => {
    let numStr = num + "";
    let total = "";
    for(let i in numStr){
        total += (parseInt(numStr[i]**2 + ""))
    }
    return parseInt(total)

}