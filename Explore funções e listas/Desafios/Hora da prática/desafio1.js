function olaMundo() {
    console.log("Olá, mundo!");
}
olaMundo();

function saldacao(nome){
    console.log(`Olá, ${nome}!`);
}
saldacao('Alex');

function dobro(numero){
    return numero * 2;
}
console.log(dobro(5));

function mediaDeTresNumeros(numero1, numero2, numero3){
    return (numero1+numero2+numero3)/3;
}
console.log(mediaDeTresNumeros(10, 10, 15));

function maiorNumero(numero1, numero2){
    return numero1 > numero2 ? numero1 : numero2;
}
console.log(maiorNumero(1, 12));

function numeroAoQuadrado(numero){
    return numero**2;
}
console.log(numeroAoQuadrado(5));