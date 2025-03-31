// Crea un programa que use un bucle para generar un triángulo de asteriscos con la siguiente forma, donde el número de filas lo elija el usuario.

const fila = parseInt(prompt ("Cuantas filas queres que tenga el triangulo?"))

for (let i = fila; i >= 1 ; i-- ) {
    
    let arbol = ""

    for (let j = 1; j<= i; j++){

        arbol += `*`

    }

    console.log(arbol)
}