// Pide al usuario un número entero positivo y usa un bucle para invertirlo. Por ejemplo, si el usuario ingresa 12345, el programa debe devolver 54321.

const numero = prompt("Ingrese un número entero positivo")

let numeroInvertido = ""

for (let i = numero.length - 1; i >= 0; i--) {

    numeroInvertido += numero[i]
}

document.write(`El número invertido del número que ingreso es ${numeroInvertido}`)