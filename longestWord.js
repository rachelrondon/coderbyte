/* take the sentence parameter being passed and return the longest word */

/* If there are two or more words with the same length return the first word */

let longestWord = (sen) => {

/* The empty space between the parenthesis is very important */
let splitSentence = sen.split(' ');

let longestWord = 0;
let word = null;

for (let i = 0; i < splitSentence.length; i++) {
  if (longestWord < splitSentence[i].length) {
    longestWord = splitSentence[i].length
    word = splitSentence[i]
  }
}
return word;

}

longestWord('Hello my name is Rachel');
