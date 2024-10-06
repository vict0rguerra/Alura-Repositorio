alert('Boas vindas ao jogo do número secreto');
numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

// enquanto chute nao dfor igual ao numero secreto
while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    //se chute for igual ao numero secreto 
    if (chute == numeroSecreto){
    break;
    }else{
        if(chute > numeroSecreto){
            alert(`o numero e menor que ${chute}`);
        }else{
            alert(`o numero e maior que ${chute}`);
        }
        //tentativas = tentativas + 1; 
        tentativas ++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o numero ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);


//if(tentativas > 1){
//   alert(`Isso ai! Você descobriu o numero ${numeroSecreto} com ${tentativas} tentativas.`);
//}else {
//   alert(`Isso ai! Você descobriu o numero ${numeroSecreto} com ${tentativas} tentativa.`);
//}