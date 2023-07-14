function funk(text) {
    text = text.toLowerCase();
  
    let str = "";
  
    for (let i = 0; i < text.length; i++) {
      if (text[i].match(/[a-z]/i)) {
        const ls = text[i].charCodeAt(0) + 5;
        str += String.fromCharCode(ls);
      }
      else {
        str += text[i];
      }
    }
    return str;
  }
  let text = "Ass1alom alaykum"
  console.log(funk(text));




