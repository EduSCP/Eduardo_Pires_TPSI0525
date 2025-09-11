const prompt = require('prompt-sync')();

let num = parseInt(prompt("Digite um número inteiro: "));
let soma = 0, subtracao = 0, multiplicacao = 1, divisao = 1;

for (let i = 1; i < num; i++) {
    soma += i;
    subtracao -= i;
    multiplicacao *= i;
    divisao /= i;
}

console.log(`Soma: ${soma}`);
console.log(`Subtração: ${subtracao}`)
console.log(`Multiplicação: ${multiplicacao}`)
console.log(`Divisão: ${divisao}`)
console.log(`Foram feitas ${num - 1} operações de cada tipo`);