// Crea un programa que solicite al usuario una lista de palabras separadas por comas. Usa 
// un bucle para verificar cuáles de esas palabras son palíndromas y muéstralas. Una palabra 
// es palíndroma si se lee igual al derecho y al revés.

const palabrasSeparadasPorComa = prompt(`Escriba palabras separadas por coma para saber si son palíndromas.`)

const arrayDePalabras = palabrasSeparadasPorComa.split(", ")

arrayDePalabras.forEach (function (palabra) {

    let palabraInvertida = ""

    for (let i = palabra.length - 1; i >= 0; i--){

        palabraInvertida += palabra[i]
    }

    if(palabra.toLocaleLowerCase() === palabraInvertida.toLocaleLowerCase()){
        document.write(`${palabra} es una palabra palíndroma <br>`)
    }
})

