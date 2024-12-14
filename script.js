//function firstWord(s) {
  // your code here
//}
function firstWord(str) {
    // Remove leading spaces
    str = str.trimStart();
    
    // Find the index of the first space
    let spaceIndex = str.indexOf(' ');
    
    // If no space is found, return the entire string
    if (spaceIndex === -1) {
        return str;
    }
    
    // Return the substring up to the first space
    return str.substring(0, spaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
