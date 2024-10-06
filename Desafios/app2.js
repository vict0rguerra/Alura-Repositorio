function testarDesafio(){
    let escolha = document.getElementById('desafio').value ;
    let valor = document.getElementById('numberInput').value ;

    if (escolha === 'parImpar'){
        parImpar(valor);
    }else if(escolha === 'inverter'){
        inverter(valor);
    }else if(escolha === 'fatorial'){
        fatorial(valor);
    }

    function parImpar(numero){
        if(numero % 2 === 0){
            document.getElementById('resultado').innerText = 'O numero e Par'
        }else{
            document.getElementById('resultado').innerText = 'O numero e Impar'
        }
    }

    function inverter(stirng){
        let textoInvertido = stirng.split('').reverse().join('');
        document.getElementById('resultado').innerText = `Texto invertido: ${textoInvertido}`;
    }

    function fatorial(numero){
        let fatorial = 1
        for (let i = 1 ; i <= numero; i++ ){
            fatorial *= i 
        }
        document.getElementById('resultado').innerText = ` o fatorial de ${numero} e ${fatorial} `
    }


}