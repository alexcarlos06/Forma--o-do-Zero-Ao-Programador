console.log('Olá seja bem vindo a quarta lista de exercícios!');

let nome = 'Alex';
console.log(`Olá, ${nome}!`);

alert(`Olá, ${nome}!`);

let linguagemPreferida = prompt('Qual a sua linguagem de programação você mais gosta?');
console.log(`${linguagemPreferida}`);

let valor1 = 2;
let valor2 = 3;

let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

resultado = valor1 - valor2;

console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}`);

let idade = prompt('Qual a sua idade?');

if(idade >= 18){
    console.log('Você é maior de idade');
}else{
    console.log('Você é menor de idade');
}

let numero = prompt('Digite um número');

if(numero > 0){
    console.log('O número é positivo');
} else if(numero < 0){
    console.log('O número é negativo');
} else {
    console.log('O número é neutro');
}

let contador = 1;
while(contador <= 10){
    console.log(contador);
    contador++;
}

let nota = prompt('Digite a nota do aluno');

if(nota >= 7){
    console.log('Aprovado!');
}else {console.log('Reprovado!');}

console.log(Math.random());
console.log(parseInt(Math.random() * 10 + 1));
console.log(parseInt(Math.random() * 1000 + 1));