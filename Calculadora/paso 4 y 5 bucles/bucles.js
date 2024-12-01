// Paso 1: Declaración de Variables
let num1 = 20; 
let num2 = 10; 
let operacion = "";

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
    return operacionesValidas.includes(operacion);
}

// Paso 4: Bucle para múltiples operaciones
while (true) {
    operacion = prompt("Ingrese la operación a realizar (suma, resta, multiplicacion, division) o 'salir' para terminar:");
    
    if (operacion.toLowerCase() === "salir") {
        console.log("¡Gracias por usar la calculadora de oscar!");
        break; 
    }
    
    if (!validarOperacion(operacion)) {
        console.log("Error: Operación no válida.");
        continue; 
    }
    
    num1 = parseFloat(prompt("Ingrese el primer número:"));
    num2 = parseFloat(prompt("Ingrese el segundo número:"));
    
    const resultado = realizarOperacion(num1, num2, operacion);
    console.log(`El resultado de la ${operacion} es: ${resultado}`);
}
