//Encuentra la diferencia entre la suma de los cuadrados de los primeros cien números naturales y el cuadrado de la suma.

function diferencia() {
  sumaCuadrados = 0
  suma = 0
  for (let i = 1; i <= 100; i++) {
    sumaCuadrados = sumaCuadrados + Math.pow(i,2)
    suma += i
  }
  
  const cuadradoS = Math.pow(suma,2)
  return cuadradoS - sumaCuadrados
}

console.log(` La diferencia es de: ${diferencia()}`)