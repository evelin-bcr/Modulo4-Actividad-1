// Un archivo .test.js se conoce como un suit de prueba, es el lugar donde se escriben las pruebas unitarias o casos de uso para el código fuente de tu aplicación.

// Importa la función que deseas probar
import { suma } from "../src/utils/ejemplo.js";


// Desarrollo de las pruebas

// 1.Bloques de prueba (agrupa por metodos o funcionalidades) -> describe (una descripcion, fn flecha)
// 2. Casos individuals de pruebas -> it (una descripcion, fn flecha)
//  Es que abarquen la mayor cantidad de escenarios posibles (casos de uso) 
// usted conozca el resultado esperado de la función para cada caso de prueba


describe("Pruebas para la función suma", () => {

// Definir los casos de prueba individuales

    it ("caso 1: suma de números positivos", () => {
expect(suma(2, 3)).toBe(5);

});

it ("caso 2: suma de número con cero", () => {
expect(suma(7,0)).toBe(7);

});

it ("caso 3: suma de números negativos", () => {
expect(suma(-4, -6)).toBe(-10);


});

});