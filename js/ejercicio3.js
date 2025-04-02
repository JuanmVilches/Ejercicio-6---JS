// Crea un programa que pida al usuario un número del 1 al 100 y use un bucle para imprimir 
// la tabla de multiplicar de ese número. Si la multiplicación da como resultado un número 
// mayor a 1000, detén el bucle.

let numeroUsuario

do {
    numeroUsuario = parseFloat(prompt('Escriba un número del 1 al 100'))
} while (numeroUsuario > 100 || isNaN(numeroUsuario) || numeroUsuario <= 0)

    console.log (numeroUsuario)

let multiplo = 1
let resultado

while (resultado < 1000) {
    resultado = numeroUsuario * multiplo

    document.write(`${numeroUsuario} * ${multiplo} = ${resultado} <br>`)

    multiplo ++
}
