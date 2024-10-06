function executarDesafio() {
    const escolha = document.getElementById("desafio").value;
    const valor = document.getElementById("numberInput").value;

    if (escolha === "parImpar") {
        testarParImpar(valor);
    } else if (escolha === "inverter") {
        inverterString(valor);
    } else if (escolha === "fatorial") {
        calcularFatorial(valor);
    }
}

function testarParImpar(numero) {
    if (numero % 2 === 0) {
        document.getElementById("resultado").innerText = `O número ${numero} é Par!`;
    } else {
        document.getElementById("resultado").innerText = `O número ${numero} é Ímpar!`;
    }
}

function inverterString(texto) {
    const textoInvertido = texto.split('').reverse().join('');
    document.getElementById("resultado").innerText = `Texto invertido: ${textoInvertido}`;
}

function calcularFatorial(numero) {
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    document.getElementById("resultado").innerText = `O fatorial de ${numero} é ${fatorial}`;
}