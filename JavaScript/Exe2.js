let numeros = [3, 8, 5, 10, 7, 6, 12, 19, 21, 30];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(`${numeros[i]} é PAR`);
    } else {
        console.log(`${numeros[i]} é ÍMPAR`);
    }
}