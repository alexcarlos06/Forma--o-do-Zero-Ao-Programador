alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;
console.log(numeroSecreto);
// Enquanto o chute não for igual ao número secreto
while (numeroSecreto != chute) {
    //pedir um número para o usuário
    chute = prompt(`Escola um número entre 1 e ${numeroMaximo}`);
    //se o chute for igual ao número secreto
    if (numeroSecreto == chute) {
        break;
    } else {
        if (numeroSecreto < chute) {
            alert(`Você errou! O número secreto é menor que ${chute}`);
        } else {
            if (numeroSecreto > chute) {
                alert(`Você errou! O número secreto é maior que ${chute}`);
            }
        }
    }
    tentativas++;
}
let texto = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você acertou! o número secreto ${numeroSecreto} com ${tentativas} ${texto}!`);