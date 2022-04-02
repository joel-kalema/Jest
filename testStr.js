function string(str) {
  if(typeof str !== 'string'){
    return;
  }
  return str.length + 'hello'
}

module.exports = string;
