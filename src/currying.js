let multiply = (x, y) => x * y;

let mutiplyByTwo = multiply.bind(this, 2);

console.log(mutiplyByTwo(5));

// closure way ::

let multiplyFnWithClosure = (x) => {
  return (y) => console.log(x * y);
};

let multiplyBy7 = multiplyFnWithClosure(7);
multiplyBy7(8);
