let simpleSymbols = (str) => {
let theStr = '=' + str + '=';
for (let i = 0; i < theStr.length; i++) {

    if (theStr[i].match(/[a-z]/i) !== null) {

        if (theStr[i-1] !== '+' || theStr[i+1] !== '+') {
          return false;
        }
    }
  }
  return true;
};

simpleSymbols('+d+=3=+s+');
