module.exports = function getZerosCount(number, base) {
  let factorial = number;
  let baseSystem = base;
  
  for (let i = 2; i <= baseSystem; i++) {
    let answer = 0;
    while (baseSystem % i === 0) {
      baseSystem = Math.floor(baseSystem / i); 
      answer++;
    }

    let zeros = 0;
    let count = number;
    while (count / i > 0) {
      zeros += Math.floor(count / i); 
      count = Math.floor(count / i);
    }
    factorial = Math.floor(Math.min(factorial, zeros / answer));
  }

  return factorial;
}