const fibonacci = function(idx) {
  num = Number(idx);
  if (num == "error") {
    return "OOPS";
  }
  if (num < 0) {
    return "OOPS";
  }
  return fibonacciHelp(num);
};

function fibonacciHelp(idx){
  if (num == 0) {
    return 0;
  }
  let prev = 0;
  let curr = 1;
  for (let i = 2; i <= idx; i++){
    let next = curr + prev;
    prev = curr;
    curr = next;
  }
  return curr;
}

// Do not edit below this line
module.exports = fibonacci;
