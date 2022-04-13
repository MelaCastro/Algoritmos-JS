// Encuentra la diferencia entre la suma de los cuadrados de los primeros cien 
// números naturales y el cuadrado de la suma.

function diferencia() {
  let sumaCuadrados = 0
  let suma = 0
  const limit = 100

  for (let i = 1; i <= limit; i++) {
    sumaCuadrados = sumaCuadrados + Math.pow(i, 2)
    suma += i
  }  
  const cuadradoS = Math.pow(suma, 2)    //  cuadrado de la suma
  return cuadradoS - sumaCuadrados
}

console.log(`La diferencia es de: ${diferencia()}`)