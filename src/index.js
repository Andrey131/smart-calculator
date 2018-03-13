class SmartCalculator {
  constructor(initialValue) {
    this.term = [initialValue];
  }

  add(number) {
    this.term += '+' + number;
    return this;
  }
  
  subtract(number) {
    this.term += '-' + number;
    return this;
  }

  multiply(number) {
    this.term += '*' + number;
    return this;
  }

  devide(number) {
    this.term += '/' + number;
    return this;
  }

  pow(number) {
    this.term += '**' + number;
    return this;
  }

  valueOf() {
    return eval(this.term);
  }
}

module.exports = SmartCalculator;
