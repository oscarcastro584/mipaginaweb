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

// Paso 3: Validaciones
function validarOperacion(operacion) {
    const operacionesValidas = ["suma", "resta", "multiplicacion", "division"];
    if (!operacionesValidas.includes(operacion)) {
        return false;
    }
    return true;
}

// Prueba de validaciones
operacion = "suma"; // Puedes cambiar esto a cualquier operación
if (validarOperacion(operacion)) {
    console.log(`Operación válida: ${operacion}`);
    console.log(`Resultado: ${realizarOperacion(num1, num2, operacion)}`);
} else {
    console.log("Error: Operación no válida.");
}

operacion = "division";
num2 = 0; // Probando división por cero
if (validarOperacion(operacion)) {
    console.log(`Operación válida: ${operacion}`);
    console.log(`Resultado: ${realizarOperacion(num1, num2, operacion)}`);
} else {
    console.log("Error: Operación no válida.");
}
