let diaDaSemana = prompt('Qual é o dia da semana?');
if (diaDaSemana.toUpperCase() == 'SÁBADO' || diaDaSemana.toUpperCase() == 'SABADO' || diaDaSemana.toUpperCase() == 'DOMINGO') {
    alert('Bom fim de semana!');
} else { alert('Boa semana!'); }

let numero = prompt('Digite um número');
if (numero > 0) {
    alert('Número positivo');
} else if (numero < 0) {
    alert('Número negativo');
} else if (numero == 0) {
    alert('Número neutro');
} else {
    alert('Não é um número');
}

let pontuacao = prompt('Informe sua pontuação')

if (typeof (pontuacao*1) != 'number') { alert('Pontuação inválida!'); }
else {
    if (pontuacao >= 1000) {
        alert('Parabéns você venceu!');
    } else {
        alert('Tente novamente para ganhar!');
    }

    alert(`Seu saldo em conta é ${pontuacao},00 reais`);
}

let nome = prompt('Informe seu nome!')

alert(`Seja bem vindo ${nome}!`);