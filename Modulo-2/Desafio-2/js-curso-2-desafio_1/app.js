function inicio(){
    console.log('ola, mundo');
}
inicio();

function nome(){
    let seuNome = prompt('qual seu nome?');
    console.log (`Ola, ${seuNome}!`);
}
nome();

function dobrarNumeroo(){
    let num = prompt('Digite um numero.');
    console.log(num*2);
}
dobrarNumeroo();

function media(){
    let num1 = parseFloat(prompt('Digite um numero.'));
    let num2 = parseFloat(prompt('Digite um numero.'));
    let num3 = parseFloat(prompt('Digite um numero.'));

    let soma = num1+num2+num3;
    let media = soma/3 ;
    console.log(media);
}
media()

function numeroMaior(){
    let num_1 = parseFloat(prompt('Digite o primeiro número:'));
    let num_2 = parseFloat(prompt('Digite o segundo número:'));
    return Math.max(num_1,num_2);
}
let resultado = numeroMaior();
console.log(`O maior número é: ${resultado}`); 

function numeroQuad() {
    let numParametro = parseFloat(prompt('Digite um número:')); 
    return numParametro; 
}

let numeroDigitado = numeroQuad(); 
let quadrado = numeroDigitado * numeroDigitado; 

console.log(`O quadrado de ${numeroDigitado} é: ${quadrado}`); 


