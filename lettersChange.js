let lettersChange = (str) => {

  for (let i = 0; i < str.length; i++) {
    if str[i] === 'a' || 'e' || 'i' || 'o' || 'u' {
      str[i].toUpperCase();
    }
  }

}

lettersChange(str);
