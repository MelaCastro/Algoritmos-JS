//Encuentra el palíndromo más grande hecho del producto de dos números de 3 dígitos.
function palindromoM() {
  array = []
  
  for(i = 999; i>100; i--) {  //inicien en 999 y terminen en 100, multiplicaremos con cada iteracion el numero obtenido 
    for(x = 999; x>100; x--) {
      if(palindromo(x*i)){
        array.push(x * i)
      }
    }
  }
  return Math.max.apply(Math, array);   //elemento mayor en un array numérico.

}

function palindromo(p){     //verificar si es palindromo
  wordReverse = p.toString() === p.toString().split("").reverse().join("")
  return  wordReverse
}

console.log(`El palíndromo más grande es : ${palindromoM()}`)

//(i = 913 y j = 993)

