let numeroSecreto = gerarNumero();
let tentativas = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
exibirTexto('h1', 'Jogo do Número Secreto.');
exibirTexto('p', 'Escolha um número entre 1 e 10.');
}

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value; 

    if (numeroSecreto == chute) {
        exibirTexto('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa} !`; 
        exibirTexto('p', mensagemTentativas); 
        document.getElementById('reiniciar').removeAttribute('disabled');
    } 
    else {
        if (chute > numeroSecreto) {
            exibirTexto('p', 'O número é menor!');
        } 
        else {
            exibirTexto('p', 'O número é maior!');
        }
        tentativas++
        limparCampo ();
    }
}

function gerarNumero() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo(){
    chute = document.querySelector ('input'); 
    chute.value = ''; 
}

function reiniciarJogo(){
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1 ;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
