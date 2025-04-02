// Escribe un programa que use un bucle para pedir al usuario números enteros. Suma esos 
// números y detén el bucle cuando el acumulado sea mayor o igual a 100. Muestra el total 
// acumulado.

let resultado = 0
do {
    let numeroEntero = parseInt(prompt(`Ingrese un número entero`))

    if(!isNaN(numeroEntero)) {
        resultado += numeroEntero
    } else {
        alert("Ingrese un número válido")
    }
    console.log (resultado)
} while (resultado <= 100)

