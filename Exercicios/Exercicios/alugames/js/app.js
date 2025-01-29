let jogosAlugados = 1
function alterarStatus(id){
    let escolhaGame = document.getElementById(`game-${id}`)
    let imagem = escolhaGame.querySelector('.dashboard__item__img')
    let botao = escolhaGame.querySelector('.dashboard__item__button')
    let nomeJogo = escolhaGame.querySelector('.dashboard__item__name')

    if(imagem.classList.contains('dashboard__item__img--rented')){
        if(confirm(`Quer mesmo devolver o ${nomeJogo.textContent}?`)){
            imagem.classList.remove('dashboard__item__img--rented')
            botao.classList.remove('dashboard__item__button--return')
            botao.textContent = 'Alugar'
            jogosAlugados --
        }
    }else{
        imagem.classList.add('dashboard__item__img--rented')
        botao.classList.add('dashboard__item__button--return')
        botao.textContent = 'Devolver'
        jogosAlugados ++
    }
    console.log(`Voce tem ${jogosAlugados} jogos alugados`)
}

