// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function dupEncode(word){
    //create a var to hold string value that IGNORES case
    let string = word.toLowerCase();
    //create a var to hold the finished string to return after it's looped through
   let unique = "";
   //loop through all letters in string
  for ( let i = 0; i < string.length; i++){
    //check for any characters that repeat
    if(string.lastIndexOf(string[i]) === string.indexOf(string[i])){
      //for each character that never dupes, place (
      unique += '(';
    } else {
        //for each character that IS a dupe, place )
      unique += ')';
    }
  }
  //return the full string value where '(' are non duped and all')' are duped
  return unique;
}
