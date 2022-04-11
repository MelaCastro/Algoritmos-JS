// Crear un método qué reciba una palabra y retorne si es palíndromo o no.

function palindromo(p){
  wordReverse = p.split("").reverse().join("");
  if( wordReverse === p){
    console.log(`${p} si es un palindromo`)
  } else {
    console.log(`${p} no es un palindromo`)
  }
}

console.log(palindromo('ana'))