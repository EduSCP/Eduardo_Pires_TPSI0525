function primo(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let count = 0;
let numero = 2;
while (count < 10) {
  if (primo(numero)) {
    console.log(numero);
    count++;
  }
  numero++;
}