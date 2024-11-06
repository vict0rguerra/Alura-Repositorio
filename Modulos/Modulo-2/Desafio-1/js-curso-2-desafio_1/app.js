let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Hora do Desafio'; 

function alertBotao(){
    console.log ('Eu amo JS');
}
function promptBotao(){
    let nomeCidade = prompt("Digite o nome de uma cidade");
    console.log ('ok');
    alert (`Estive em ${nomeCidade}e lembrei de voce`);
}
function somaBotao(){
    let num1 = prompt('Digite o primeiro numero');
    let num2 = prompt('Digite o segundo numero');

    num1 = Number(num1);
    num2 = Number(num2);

    let soma = num1 + num2;
    alert( `A soma igual a: ${soma}`);
}