function calculaIMC(){
    let peso = parseFloat(prompt('digite seu peso'));
    let alturaMetros = parseFloat(prompt('digite sua altura'));
    let imc = peso / (alturaMetros * alturaMetros);
    return imc
}
//console.log(calculaIMC())



function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }

    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }

    return fatorial;
    } 
//    let numero = parseInt(prompt('Digite um numero'));
//    let resultado = calcularFatorial(numero);
//    console.log(`O fatorial de ${numero} é ${resultado}`);


function valorDolar(){
    precoDolar = parseFloat(5.51)

    let dolar = prompt('Digite um Valor');
    let dolarParaReal = (dolar*precoDolar); 
    return dolarParaReal
}
//console.log(valorDolar()); 


function areaEperimetro(){
    let altura = parseFloat(prompt('digite a altura'));
    let largura = parseFloat(prompt('digite a largura'));

    let area = altura*largura;
    let perimetro = 2*(altura+largura);

    return{
        area : area,
        perimetro: perimetro
    }
    
}
//let result = areaEperimetro()
//console.log(`A área é igual a ${result.area}.`);
//console.log(`O perímetro é igual a ${result.perimetro}.`);



