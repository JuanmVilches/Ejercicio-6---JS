// Dado un array de números [12, -5, 7, -3, 9, -8, 15, 3, -25, 40, -33, -9], escribe un programa 
// que recorra el array con un bucle e imprima únicamente los números positivos.

const listaNumeros =  [12, -5, 7, -3, 9, -8, 15, 3, -25, 40, -33, -9]

for (let i = 0; i < listaNumeros.length; i++) {

    if (listaNumeros[i] > 0) {

        document.write (listaNumeros[i] + '<br>')

    }
}