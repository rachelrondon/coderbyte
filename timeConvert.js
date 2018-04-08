/* Take the number parameter and return the number of hours and minutes the parameter converts to */
let timeConvert = () => {

let hours = Math.floor(num / 60);
let minutes = num % 60;
return hours + ':' + minutes;

}

timeConvert();
