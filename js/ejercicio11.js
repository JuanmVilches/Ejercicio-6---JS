// Escribe un programa que solicite al usuario una palabra y use un bucle para contar cuántas vocales tiene. Usa condicionales para verificar si cada letra es una vocal. 

const palabra = prompt(`Ingrese una palabra para saber cuantas vocales tiene.`)

function contarVocales(palabra) {

    let vocales = "aeiouAEIOU"
    let contador = 0

    for (let i = 0; i < palabra.length; i++) {

        if (vocales.includes(palabra[i])) {

            contador++
        }
    }
    return contador
}

alert (`La palabra ${palabra} tiene ${contarVocales(palabra)} vocales`)
