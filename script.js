// --- Funciones Auxiliares ---

/**
 * Obtiene el valor numérico (float) de un input por su ID.
 * Maneja comas como separadores decimales.
 * @param {string} id - El ID del elemento input.
 * @returns {number} El valor numérico o NaN si es inválido.
 */
function getNumber(id) {
    const element = document.getElementById(id);
    if (!element) return NaN; // Elemento no encontrado
    const value = element.value.trim();
    if (value === '') return NaN; // Valor vacío
    // Reemplaza coma por punto para soporte decimal internacional
    return parseFloat(value.replace(',', '.'));
}

/**
 * Obtiene el valor entero (integer) de un input por su ID.
 * @param {string} id - El ID del elemento input.
 * @returns {number} El valor entero o NaN si es inválido.
 */
function getInt(id) {
    const element = document.getElementById(id);
     if (!element) return NaN;
    const value = element.value.trim();
    if (value === '') return NaN;
    // Asegura que sea un entero válido
    const parsed = parseInt(value, 10);
    // Verifica que no haya caracteres extraños después del número
    return /^-?\d+$/.test(value) ? parsed : NaN;
}

/**
 * Establece el contenido de texto de un elemento por su ID.
 * @param {string} id - El ID del elemento donde mostrar el resultado.
 * @param {string} text - El texto a mostrar.
 */
function setResult(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = text;
    } else {
        console.error(`Elemento con ID "${id}" no encontrado.`);
    }
}

/**
 * Obtiene una lista de números desde un textarea por su ID.
 * Los números pueden estar separados por comas, espacios o saltos de línea.
 * @param {string} textareaId - El ID del elemento textarea.
 * @returns {number[]} Un array de números válidos. Los NaN son filtrados.
 */
function getNumberList(textareaId) {
    const element = document.getElementById(textareaId);
    if (!element) return [];
    const text = element.value.trim();
    if (!text) return []; // Devuelve array vacío si no hay texto

    // Divide por comas, espacios o saltos de línea
    // Filtra elementos vacíos resultantes de múltiples separadores juntos
    // Convierte a número (float), manejando comas decimales
    // Filtra los resultados que no son números válidos (NaN)
    return text.split(/[\s,;\n]+/)
               .filter(n => n !== '')
               .map(n => parseFloat(n.replace(',', '.')))
               .filter(n => !isNaN(n));
}

// --- Funciones de Ejercicios ---

function ejercicio1() {
    const a = getNumber('e1_a');
    const b = getNumber('e1_b');
    const c = getNumber('e1_c');
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        setResult('r1', 'Error: Ingresa tres números válidos.');
        return;
    }
    const resultado = a + b - c + 100;
    setResult('r1', `Resultado: ${a} + ${b} - ${c} + 100 = ${resultado}`);
}

function ejercicio2() {
    const a = getNumber('e2_a');
    const b = getNumber('e2_b');
    if (isNaN(a) || isNaN(b)) {
        setResult('r2', 'Error: Ingresa dos números válidos.');
        return;
    }
    const resultado = (a - b) * (a + b);
    setResult('r2', `Resultado: (${a} - ${b}) * (${a} + ${b}) = ${resultado}`);
}

function ejercicio3() {
    const num = getNumber('e3_num');
    if (isNaN(num)) {
        setResult('r3', 'Error: Ingresa un número válido.');
        return;
    }
    if (num <= 0) {
        setResult('r3', 'Error: El número debe ser positivo.');
        return;
    }
    setResult('r3', `Resultado: El opuesto de ${num} es ${-num}`);
}

function ejercicio4() {
    const a = getNumber('e4_a');
    const b = getNumber('e4_b');
    if (isNaN(a) || isNaN(b)) {
        setResult('r4', 'Error: Ingresa dos números válidos.');
        return;
    }
    const resultado = a * b;
    setResult('r4', `Resultado: ${a} * ${b} = ${resultado}`);
}

function ejercicio5() {
    const num = getNumber('e5_num');
    if (isNaN(num)) {
        setResult('r5', 'Error: Ingresa un número válido.');
        return;
    }
    const mensaje = num > 100
        ? `${num} es MAYOR a 100.`
        : `${num} NO es mayor a 100.`;
    setResult('r5', `Resultado: ${mensaje}`);
}

function ejercicio6() {
    const num = getNumber('e6_num');
    if (isNaN(num)) {
        setResult('r6', 'Error: Ingresa un número válido.');
        return;
    }
    let tipo;
    if (num > 0) {
        tipo = 'POSITIVO';
    } else if (num < 0) {
        tipo = 'NEGATIVO';
    } else {
        tipo = 'NULO (CERO)';
    }
    setResult('r6', `Resultado: El número ${num} es ${tipo}.`);
}

function ejercicio7() {
    const a = getNumber('e7_a');
    const b = getNumber('e7_b');
    const c = getNumber('e7_c');
    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        setResult('r7', 'Error: Ingresa tres longitudes positivas válidas.');
        return;
    }

    // Validar si forman un triángulo (desigualdad triangular)
    if (a + b > c && a + c > b && b + c > a) {
        let tipo;
        // Usar una pequeña tolerancia para comparar flotantes si es necesario
        // const tolerance = 1e-10;
        // if (Math.abs(a - b) < tolerance && Math.abs(b - c) < tolerance) { ... }
        if (a === b && b === c) {
            tipo = 'Equilátero';
        } else if (a === b || a === c || b === c) {
            tipo = 'Isósceles';
        } else {
            tipo = 'Escaleno';
        }
        setResult('r7', `Resultado: Los lados ${a}, ${b}, ${c} forman un triángulo ${tipo}.`);
    } else {
        setResult('r7', `Resultado: Los lados ${a}, ${b}, ${c} NO forman un triángulo válido.`);
    }
}

function ejercicio8() {
    const a = getNumber('e8_a');
    const b = getNumber('e8_b');
    if (isNaN(a) || isNaN(b)) {
        setResult('r8', 'Error: Ingresa dos números válidos.');
        return;
    }
    const mayor = Math.max(a, b);
    setResult('r8', `Resultado: El mayor entre ${a} y ${b} es ${mayor}.`);
}

function ejercicio9() {
    const a = getNumber('e9_a');
    const b = getNumber('e9_b');
    if (isNaN(a) || isNaN(b)) {
        setResult('r9', 'Error: Ingresa dos números válidos.');
        return;
    }
    const menor = Math.min(a, b);
    setResult('r9', `Resultado: El menor entre ${a} y ${b} es ${menor}.`);
}

function ejercicio10() {
    const minutos = getInt('e10_min'); // Usamos getInt porque los minutos suelen ser enteros
    if (isNaN(minutos) || minutos < 0) {
        setResult('r10', 'Error: Ingresa una duración válida (minutos enteros >= 0).');
        return;
    }

    let costo;
    const tarifaBaseMinuto = 9.50;
    const tarifaAdicionalMinuto = 1.10;
    const limiteMinutosBase = 3;

    if (minutos === 0) {
        costo = 0;
    } else if (minutos <= limiteMinutosBase) {
        costo = minutos * tarifaBaseMinuto;
    } else {
        const costoBase = limiteMinutosBase * tarifaBaseMinuto;
        const minutosAdicionales = minutos - limiteMinutosBase;
        costo = costoBase + (minutosAdicionales * tarifaAdicionalMinuto);
    }
    setResult('r10', `Resultado: El costo por ${minutos} minutos es $${costo.toFixed(2)}`);
}

function ejercicio11() {
    const n1 = getNumber('e11_n1');
    const n2 = getNumber('e11_n2');
    const n3 = getNumber('e11_n3');
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        setResult('r11', 'Error: Ingresa tres números válidos.');
        return;
    }
    const suma = n1 + n2 + n3;
    const resta = n1 - n2 - n3;
    const producto = n1 * n2 * n3;

    let cocienteStr = "División por cero no permitida";
    if (n2 !== 0 && n3 !== 0) {
        // Podríamos hacer n1 / n2 / n3 o (n1 / n2) / n3. Asumimos lo segundo.
        const cociente = (n1 / n2) / n3;
        cocienteStr = cociente.toFixed(4); // Mostrar con 4 decimales
    } else if (n2 !== 0 && n3 === 0) {
         cocienteStr = `División por n3 (cero) no permitida`;
    } else if (n2 === 0) {
         cocienteStr = `División por n2 (cero) no permitida`;
    }


    const resultados = `
Suma (${n1}+${n2}+${n3}): ${suma}
Resta (${n1}-${n2}-${n3}): ${resta}
Producto (${n1}*${n2}*${n3}): ${producto}
Cociente ((${n1}/${n2})/${n3}): ${cocienteStr}
    `;
    setResult('r11', resultados.trim());
}

function ejercicio12() {
    const n1 = getNumber('e12_n1');
    const n2 = getNumber('e12_n2');
    const n3 = getNumber('e12_n3');
     if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        setResult('r12', 'Error: Ingresa tres números válidos.');
        return;
    }

    if (n1 > 0 && n2 > 0 && n3 > 0) {
        const suma = n1 + n2 + n3;
        const resta = n1 - n2 - n3;
        const producto = n1 * n2 * n3;
        const cociente = (n1 / n2) / n3; // Ya validado que n2 y n3 son > 0

        const resultados = `
Todos son positivos. Operaciones:
Suma: ${suma}
Resta: ${resta}
Producto: ${producto}
Cociente: ${cociente.toFixed(4)}
        `;
        setResult('r12', resultados.trim());
    } else {
        setResult('r12', 'Resultado: No todos los números son positivos. No se realizan las operaciones.');
    }
}

function ejercicio13() {
    const n1 = getNumber('e13_n1');
    const n2 = getNumber('e13_n2');
    const n3 = getNumber('e13_n3');

    const notas = [n1, n2, n3];
    let mensaje = '';
    let promedioStr = '';
    let mayorStr = '';
    let menorStr = '';
    let error = false;

    // Validar que sean números
    if (notas.some(isNaN)) {
         mensaje = 'Error: Ingresa tres notas numéricas válidas.';
         error = true;
    } else {
        // Validar rango 0-10 y positividad
        const notasValidas = notas.every(n => n >= 0 && n <= 10);

        if (notasValidas) {
            const promedio = (n1 + n2 + n3) / 3;
            const mayor = Math.max(n1, n2, n3);
            const menor = Math.min(n1, n2, n3);

            promedioStr = `a) Promedio: ${promedio.toFixed(2)}`;
            mayorStr = `b) Nota Mayor: ${mayor}`;
            menorStr = `c) Nota Menor: ${menor}`;
            mensaje = `${promedioStr}\n${mayorStr}\n${menorStr}`;
        } else {
            mensaje = 'Error: a) Una de las notas no corresponde (debe estar entre 0 y 10).';
             error = true;
             // Aún podemos calcular mayor y menor si son números
             if (!notas.some(isNaN)) {
                 mayorStr = `b) Nota Mayor (considerando todas): ${Math.max(n1, n2, n3)}`;
                 menorStr = `c) Nota Menor (considerando todas): ${Math.min(n1, n2, n3)}`;
                 mensaje += `\n${mayorStr}\n${menorStr}`;
             }
        }
    }
    setResult('r13', mensaje);
}

function ejercicio14() {
    let numeros = 'Números del 1 al 100:\n';
    for (let i = 1; i <= 100; i++) {
        numeros += i + (i % 10 === 0 ? '\n' : ', '); // Salto de línea cada 10 números
    }
    // Quita la última coma y espacio o salto de línea
    setResult('r14', numeros.trim().replace(/,$/, ''));
}

function ejercicio15() {
    let opuestos = 'Opuestos del 1 al 100:\n';
     for (let i = 1; i <= 100; i++) {
        opuestos += -i + (i % 10 === 0 ? '\n' : ', ');
    }
    setResult('r15', opuestos.trim().replace(/,$/, ''));
}

function ejercicio16() {
    const n = getInt('e16_n');
    if (isNaN(n) || n < 1) {
        setResult('r16', 'Error: Ingresa un número N entero positivo.');
        return;
    }
    let lista = `Números del 1 al ${n}:\n`;
    for (let i = 1; i <= n; i++) {
        lista += i + (i % 10 === 0 && i !== n ? '\n' : (i === n ? '' : ', '));
    }
     setResult('r16', lista);
}

function ejercicio17() {
    const a = getInt('e17_a');
    const b = getInt('e17_b');
    if (isNaN(a) || isNaN(b)) {
         setResult('r17', 'Error: Ingresa números A y B enteros válidos.');
         return;
    }
    if (a > b) {
         setResult('r17', 'Error: El número A debe ser menor o igual que B.');
         return;
    }
    let lista = `Números enteros entre ${a} y ${b} (inclusive):\n`;
     for (let i = a; i <= b; i++) {
        lista += i + (i === b ? '' : ', ');
         if ((i - a + 1) % 10 === 0 && i !== b) { // Salto de línea cada 10, excepto al final
             lista += '\n';
         }
    }
    setResult('r17', lista);
}

function ejercicio18() {
    const n = getInt('e18_n');
     if (isNaN(n) || n <= 1) {
        setResult('r18', 'Error: Ingresa un número N entero mayor que 1.');
        return;
    }
    let sumatoria = 0;
    for (let i = 1; i < n; i++) { // Suma los que le *anteceden* desde 1 (hasta n-1)
        sumatoria += i;
    }
    setResult('r18', `Sumatoria de los números de 1 a ${n-1}: ${sumatoria}`);
    // Nota: Esto es equivalente a la fórmula n*(n-1)/2
}

function ejercicio19() {
    const lista = getNumberList('e19_list');
    if (lista.length !== 20) {
        setResult('r19', `Error: Se requieren 20 números válidos. Ingresaste ${lista.length}.`);
        return;
    }
    const suma = lista.reduce((acc, current) => acc + current, 0);
    const promedio = suma / 20;
    setResult('r19', `Promedio de los 20 números: ${promedio.toFixed(4)}`);
}

function ejercicio20() {
    const lista = getNumberList('e20_list');
    if (lista.length === 0) {
        setResult('r20', 'Error: Ingresa al menos un número válido en la lista.');
        return;
    }
    const suma = lista.reduce((acc, current) => acc + current, 0);
    setResult('r20', `Sumatoria de los ${lista.length} números: ${suma}`);
}

function ejercicio21() {
    const lista = getNumberList('e21_list');
     if (lista.length === 0) {
        setResult('r21', 'Error: Ingresa al menos un número válido en la lista.');
        return;
    }
    const suma = lista.reduce((acc, current) => acc + current, 0);
    const promedio = suma / lista.length;
    setResult('r21', `Promedio general de los ${lista.length} números: ${promedio.toFixed(4)}`);
}

function ejercicio22() {
     // Re-leemos la lista cruda para encontrar el 0 o negativo
    const element = document.getElementById('e22_list');
    if (!element) { setResult('r22','Error interno.'); return; }
    const text = element.value.trim();
     if (!text) { setResult('r22','Cantidad: 0'); return; }

    const rawNumbers = text.split(/[\s,;\n]+/).filter(n => n !== '');
    let count = 0;
    for (const numStr of rawNumbers) {
        const num = parseFloat(numStr.replace(',', '.'));
        if (isNaN(num)) continue; // Ignorar si no es número válido en esta etapa

        if (num <= 0) {
            break; // Detener el conteo
        }
        count++;
    }
    setResult('r22', `Cantidad de números antes de 0 o negativo: ${count}`);
}

function ejercicio23() {
    // Similar a 22, leemos la lista cruda
    const element = document.getElementById('e23_list');
    if (!element) { setResult('r23','Error interno.'); return; }
    const text = element.value.trim();
     if (!text) { setResult('r23','No hay números para promediar.'); return; }

    const rawNumbers = text.split(/[\s,;\n]+/).filter(n => n !== '');
    let suma = 0;
    let count = 0;
    for (const numStr of rawNumbers) {
        const num = parseFloat(numStr.replace(',', '.'));
        if (isNaN(num)) continue; // Ignorar no números

        if (num <= 0) {
            break; // Detener el proceso
        }
        suma += num;
        count++;
    }

    if (count === 0) {
        setResult('r23', 'No se encontraron números positivos antes de un 0 o negativo.');
    } else {
        const promedio = suma / count;
        setResult('r23', `Promedio de los ${count} números antes de 0 o negativo: ${promedio.toFixed(4)}`);
    }
}

function ejercicio24() {
    let resultado = 'Números del 1 al 100 (Par/Impar):\n';
    for (let i = 1; i <= 100; i++) {
        const tipo = (i % 2 === 0) ? 'Par' : 'Impar';
        resultado += `${i} (${tipo})${(i === 100) ? '' : ', '}`;
        if (i % 5 === 0 && i !== 100) { // Salto de línea cada 5 para mejor lectura
            resultado += '\n';
        }
    }
     setResult('r24', resultado.trim().replace(/,$/, ''));
}