// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    let breakMe = "";
    for(letter of string){
      if(letter == letter.toUpperCase()){
        breakMe += " ";
        breakMe += letter
      } else {
        breakMe += letter;
      }
    }
    return breakMe;
      
  }
  