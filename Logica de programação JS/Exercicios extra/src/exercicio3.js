let contador = 1;

while (contador <= 10) {
    alert(`Contador de 1 à 10 = ${contador}`);
    contador++;
}
contador--;
while (contador >= 0) {
    alert(`Contador de 10 à 0 = ${contador}`);
    contador--;
}

contador = prompt("Digite um número para o contador regressivo no console.log");

while (contador >= 0) {
    console.log(contador);
    contador--;
}

let maximo = prompt("Digite um número para o contador progressivo no console.log");
contador = 0;
while (contador <= maximo) {
    console.log(contador);
    contador++;
}