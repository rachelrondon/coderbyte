let alphabetSoup = (str) => {

let array = str.split('');
let orderString = array.sort();
return orderString.join('');

};

alphabetSoup("coderbyte");
