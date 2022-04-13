// Al considerar los términos en la sucesión de Fibonacci cuyos valores no superan
// los cuatro millones, encuentre la suma de los términos de valor par.
let sum = 0
limit = 4000000

function fibonacci( num1, num2) {   
  let numAfter = num1 + num2
  if (numAfter % 2 === 0) sum += numAfter    
  if (numAfter > limit) return num2
  return fibonacci(num2, numAfter)
}
fibonacci(0, 1)
console.log(`la suma de los términos de valor par es : ${sum}`)


// Problemas que tuve: inicializando mal fibonacci [1,2], manera correcta [0,1 ], suma resultado incorecto

// mostrar fibonacci 
// for(i = 2; i <= 4000000; i++) {
//     fibo[i] = fibo[i - 2] + fibo[i - 1]