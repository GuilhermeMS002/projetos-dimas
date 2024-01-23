let guardarNumeros = [];
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto) {
    let paragrafo = document.querySelector(tag);
    paragrafo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

mensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativa = `Você encontrou o numero secreto com ${tentativas} ${palavraTentativa}`;
    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Acertou!');
        exibirTexto('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled')
        document.querySelector('button').setAttribute('disabled', true)

    } else if (chute > numeroSecreto) {
        exibirTexto('p', 'O número é menor');
    } else {
        exibirTexto('p', 'O número é maior');
    }
    tentativas++;
    limparInput();
}

function numeroAleatorio() {
    let numeroGerado = parseInt(Math.random() * numeroLimite + 1);
    let zerarLista = guardarNumeros.length;

    if (zerarLista == numeroLimite) {
        guardarNumeros = [];
    }
    if (guardarNumeros.includes(numeroGerado) ) {
        return numeroAleatorio()
    } else {
        guardarNumeros.push(numeroGerado)
        console.log(guardarNumeros)
        return numeroGerado
    }
}

function limparInput () {
    chute = document.querySelector('input');
    chute.value = '';
}

function mensagemInicial() {
    exibirTexto('h1', 'Jogo número secreto');
    exibirTexto('p', 'Escolha um número de 1 a 10');
}

function reiniciarJogo() {
    document.querySelector('button').removeAttribute('disabled')
    numeroSecreto = numeroAleatorio();
    tentativas = 1;
    limparInput();
    mensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)

}