

// traditional Fib value in sequence

function getFib(n){

  if(n<=1){
    return n
  }

  return getFib(n - 1) + getFib(n - 2)

}

// get fib using principles of dynamic programming

function dynamicGetFib(n){

  var history = {}

  if(n<=1){
    return n
  } else if(history.hasOwnProperty(n)){
    return history[n]
  }

  return history[n] = getFib(n - 1) + getFib(n - 2)

}



// Fib sequence on one line. Just because.

var fib = (n) => (n <= 1) ? n : fib(n - 1) + fib(n - 2)


/*
  Demo purposes only -- showing how unique functional / dynamic JS can be.
  The context of 'this' in the arrow function is the window (global) namespace.
  Dont do that. */

var getDynamicFib = (n) =>
  (this.hasOwnProperty(n+'-key'))
    ? this[n+'-key']
    : this[n+'-key'] = (n <= 1) ? n : getDynamicFib(n - 1) + getDynamicFib(n - 2)
