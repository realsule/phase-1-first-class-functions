function receivesAFunction(callback) {
  callback();
}


function returnsANamedFunction() {
  function namedFunc() {
    console.log("A named function");
  }
  return namedFunc;
}


function returnsAnAnonymousFunction() {
  return function() {
    console.log("I'm an anonymous function!");
  };
}
