// crear un método qué reciba un número cualquiera y devuelva el Factorial de ese número. n! = n * (n-1)

function factorial(num){
  result = 1
	for (let i = 1; i <= num; i++) {
		result = result * i
	}
  console.log(`el factorial del numero es: ${result}`) 
}
factorial(6)
