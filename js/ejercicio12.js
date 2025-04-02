// Crea un programa que genere un número aleatorio entre 1 y 10. Luego usa un bucle para 
// permitir al usuario adivinar el número. Si el usuario adivina correctamente, felicítalo y detén 
// el bucle. Si no, indica si el número que ingresó es mayor o menor al número generado.

let numeroRandom
let advinarNumero

do {
    numeroRandom = parseInt(Math.random() * 10) + 1
    advinarNumero = +prompt (`Escriba un número del 1 al 10`)
    console.log(numeroRandom)

    if(numeroRandom === advinarNumero) {
        alert (`Felicitaciones, advinó el número`)
    } else if (advinarNumero > numeroRandom) {
        alert(`El número que ingreso es mayor`)
    } else if (advinarNumero < numeroRandom){
        alert(`El número que ingreso es menor`)
    }
} while (advinarNumero != numeroRandom )