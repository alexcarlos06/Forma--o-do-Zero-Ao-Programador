let titulo = document.querySelector('h1');

titulo.innerHTML = 'Hora do Desafio';

function cliclouBotaoConsole() {
    console.log('O botão foi clicado');
}

function alertaFoiPressionado() {
    alert('Eu amo js');
}

function promptFoiPressionado() {
    let cidade = prompt('Escreva o nome de uma cidade.');
    alert(`Estive em ${cidade} e lembrei de você.`);
}

function somaFoiPressionado(){
    let num1 = prompt('Digite um número');
    let num2 = prompt('Digite o segundo número');

    let soma = parseInt(num1) + parseInt(num2);

    alert(`${num1} + ${num2} = ${soma}`);
}