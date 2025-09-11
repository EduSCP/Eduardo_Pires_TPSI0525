const prompt = require('prompt-sync')();

let num = parseInt(prompt("Digite um número inteiro: "));
let divisores = 0;

for (let i = 1; i <= num; i++) {
    if (num % i === 0) divisores++;
}

console.log(`${num} tem ${divisores} divisores.`);