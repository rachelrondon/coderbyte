/* Capitalize the first letter of each word in a sentence */

let letterCapitalize = (str) => {
let newString = str.split(' ');

for (let i = 0; i < newString.length; i++) {
  newString[i] = newString[i].substring(0,1).toUpperCase() + newString[i].substring(1);
}
return newString.join(' ');

};

letterCapitalize('hello world');
