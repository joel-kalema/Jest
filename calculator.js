class calculater{
  constructor(a,b) {
    this.a = a;
    this.b = b;
  }

  add(a,b) {
    return a + b;
  }

  sub(a,b) {
    return a - b;
  }

  mult(a,b) {
    return a * b;
  }

  div(a,b) {
    return a / b;
  }
}

module.exports = calculater;

