let jogosAlugados = 1;
function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeGame = gameClicado.querySelector('.dashboard__item__name');
    if( imagem.classList.contains('dashboard__item__img--rented')){
        let confirmacao = confirm('Tem certeza que quer devolver o jogo?')
        if(confirmacao){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        jogosAlugados--;
        console.log(`O ${nomeGame.textContent} foi devolvido!`)
    }   else{
        console.log('O jogo não será devolvido!')
        }
    }else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;
        console.log(`O ${nomeGame.textContent} foi alugado!`)
    }
    console.log(`Total de jogos alugados: ${jogosAlugados}`)
}