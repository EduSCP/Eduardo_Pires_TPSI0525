const prompt = require('prompt-sync')();

function primo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

let num = parseInt(prompt("Digite um número inteiro: "));

if (primo(num)) {
    console.log(`${num} é um número primo.`);
} else {
    console.log(`${num} não é um número primo.`);
}