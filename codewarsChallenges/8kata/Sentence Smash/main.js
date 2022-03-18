function smash (words) {
  
  let sentence = "";
  
  for (let i = 0; i < words.length; i++){
    if(sentence === ""){
      sentence += words[i];
    } else {
      sentence += (" " + words[i]);
    }
  }
  return sentence;
};