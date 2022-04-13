//Mayor factor primo
//¿Cuál es el mayor factor primo del número 600851475143?

function primeFactor() {
  let result = 1
  let array = []
  const num = 600851475143

 for(let i = 0; i <= Math.sqrt(num); i++) {  // si es primo o no
   if(num % i === 0 && i > result ) {
     array.push(i)
   }
 }
 for(let i = 0; i < array.length; i++) {  //encontrando prim
   let is_prime = true
   for(let x = 2; x * x < array[i]; x++) {
     if(array[i] % x === 0) {
       is_prime = false
       break;
     }
   }
   if(is_prime === true) {
     result = array[i]
   }
 }
 
 console.log(`El mayor factor primo del numero ${num} es: ${result}`)
}

primeFactor()
