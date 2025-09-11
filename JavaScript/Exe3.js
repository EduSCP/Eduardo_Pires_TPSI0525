let notas = [12, 15, 17, 10, 13, 19, 14, 16, 18, 11];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

let media = soma / notas.length;
console.log(`A média é: ${media}`);