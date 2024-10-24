function sortear(){
    let quant = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let num
    let sorteados = []

    for (let i = 0; i < quant ; i++){
        num = obterNumAleatorio(de, ate)
    while(sorteados.includes(num)){
        num = obterNumAleatorio(de,ate)
    }
    sorteados.push(num)
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarStatusBotao()
}

function alterarStatusBotao(){
    let botao = document.getElementById("btn-reiniciar")
    if(botao.classList.contains("container__botao-desabilitado")){
    botao.classList.remove("container__botao-desabilitado")
    botao.classList.add("container__botao")
    }else{
    botao.classList.remove("container__botao")
    botao.classList.add("container__botao-desabilitado")
    }
}

function obterNumAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar(){
    document.getElementById('quantidade').value = ''
    document.getElementById('de').value = ''
    document.getElementById('ate').value = ''
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotao()
}