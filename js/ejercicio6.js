// Usa un bucle para imprimir los números del 1 al 50. Si el número es divisible entre 3, 
// imprime "Fizz". Si es divisible entre 5, imprime "Buzz". Si es divisible entre ambos, imprime 
// "FizzBuzz".

for (let i = 1; i <= 50; i++) {

    if (i % 3 === 0 && i % 5 === 0 ) {
        document.write(`FizzBuzz <br>`)
    }
    else if( i % 3 === 0 ) {
        document.write(`Fizz <br>`)
    } else if (i % 5 === 0) {
        document.write (`Buzz <br>`)
    } else {
        document.write(`${i} <br>`)
    }

}