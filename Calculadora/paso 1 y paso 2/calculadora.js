// Paso 1: Declaración de Variables
let num1 = 20; // Primer número
let num2 = 10; // Segundo número
let operacion = ""; // Operación que se desea realizar

// Paso 2: Función para realizar operaciones
function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        if (num2 === 0) {
            return "Error: División por cero no permitida.";
        }
        return num1 / num2;
    } else {
        return "Error: Operación no válida.";
    }
}

// Prueba inicial
console.log(realizarOperacion(num1, num2, "suma"));         
console.log(realizarOperacion(num1, num2, "resta"));        
console.log(realizarOperacion(num1, num2, "multiplicacion"));
console.log(realizarOperacion(num1, num2, "division"));     
console.log(realizarOperacion(num1, 0, "division"));        
console.log(realizarOperacion(num1, num2, "invalida"));     
