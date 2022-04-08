// Múltiplos de 3 o 5
// Encuentra la suma de todos los múltiplos de 3 o 5 por debajo de 1000.
function sumMultiples () {
  let sum=0
  limit = 1000
    for ( let i = 0; i < limit; i++) {
      if(i % 3 === 0 || i % 5 === 0){
       sum = sum + i
      }
    }
  console.log(`la suma de todos los múltiplos de 3 o 5 por debajo de 1000 es : ${sum}`)
}
sumMultiples()