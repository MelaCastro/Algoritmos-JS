// Factorial de un numero
// crear un método qué reciba un número cualquiera y devuelva el Factorial de ese número.
// n! = n * (n-1)

function factorial() {
	let num = 6
  let result = 1
	for(let i = 1; i <= num; i++) {
		result = result * i
	}
  console.log(`El factorial del numero ${num} es: ${result}`) 
}

factorial()
