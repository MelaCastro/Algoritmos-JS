// ¿Cuál es el número primo 10001?

function prime(num) {
  for(let i = 2; i <= Math.sqrt(num); i++) {   // saber si es primo
    if(num % i === 0) 
    return false
  }
  return true
}

function findNum(p) {
  let numPrime = 0

  for(numActual = 2, primosEncontrados = 0; 
      primosEncontrados < p; numActual++) {    //encontrar el numero primo

    if(prime(numActual)) {
      primosEncontrados++
      numPrime = numActual
    }
  }
  return numPrime
}

console.log(`El número primo 10001 es : ${findNum(10001)}`)