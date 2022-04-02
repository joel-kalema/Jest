function reverseWord(word) {
  if(typeof word !== 'string'){
    return;
  }
  return word.split().reverse().join();
}

module.exports = reverseWord;