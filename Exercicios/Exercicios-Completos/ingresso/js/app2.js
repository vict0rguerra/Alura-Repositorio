function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value 
    let  quantidade = parseInt(document.getElementById('qtd').value)

    let qtdPista = document.getElementById("qtd-pista")
    let qtdSuperior = document.getElementById("qtd-superior")
    let qtdInferior = document.getElementById("qtd-inferior")

    let qtdDisponivelPista = parseInt(qtdPista.textContent) ;
    let qtdDisponivelSuperior = parseInt(qtdSuperior.textContent) ;
    let qtdDisponivelInferior = parseInt(qtdInferior.textContent);

    if (tipoIngresso === 'pista') {
        if (quantidade <= qtdDisponivelPista) {
            qtdPista.textContent = qtdDisponivelPista - quantidade;
            alert(`Você comprou ${quantidade} ingresso(s) de Pista.`);
        } else {
            alert('Quantidade indisponível para Pista.');
        }
    } else if (tipoIngresso === 'superior') {
        if (quantidade <= qtdDisponivelSuperior) {
            qtdSuperior.textContent = qtdDisponivelSuperior - quantidade;
            alert(`Você comprou ${quantidade} ingresso(s) de Cadeira Superior.`);
        } else {
            alert('Quantidade indisponível para Cadeira Superior.');
        }
    }
        else if(tipoIngresso === 'inferior'){
            if (quantidade <= qtdDisponivelInferior) {
                qtdInferior.textContent = qtdDisponivelInferior - quantidade;
                alert(`Você comprou ${quantidade} ingresso(s) de Cadeira Inferior.`);
            } else {
                alert('Quantidade indisponível para Cadeira Inferior.');
            }
        }
    }

