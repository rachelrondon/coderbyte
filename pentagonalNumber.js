let pentagonalNumber = (num) => {

if (num < 2) return num;

return 5 * (num -1) + pentagonalNumber(num - 1);

}

pentagonalNumber();
