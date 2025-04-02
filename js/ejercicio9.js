// Escribe un programa que recorra un array de edades [18, 25, 14, 32, 16, 40] usando un 
// bucle y clasifique cada edad como "Mayor de edad" o "Menor de edad". Imprime cada edad 
// con su clasificación.

const edades = [18, 25, 14, 32, 16, 40] 

for (let edad of edades) {

    if (edad >= 18) {
        document.write (`Su edad es ${edad}, usted es mayor de edad <br>`)
    } else if (edad < 18) {
        document.write (`Su edad es ${edad}, usted es menor de edad <br>`)
    }

}