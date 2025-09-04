function receivesAFunction(callback) {
  callback();
}


function returnsANamedFunction() {
  function namedFunc() {
    console.log("I'm a named function!");
  }
  return namedFunc;
}


function returnsAnAnonymousFunction() {
  return function() {
    console.log("I'm an anonymous function!");
  };
}
