const Pyhton = [8.5, 7.0, 9.2, 6.8, 7.5]
const JS = [5.0, 6.2, 7.8, 8.0, 9.0]
const Java = [9.5, 8.7, 7.6, 6.4, 8.2]

function calculaMedia (listaDeNotas){
    // const somaDeNotas = listaDeNotas.reduce((acumulador, nota) => {
    //     return acumulador + nota ; 
    // }, 0 );

    const somaDeNotas = listaDeNotas.reduce((acumulador, nota) => acumulador + nota , 0 );

    const media = somaDeNotas / listaDeNotas.length; 
    return media
}

console.log(calculaMedia(Pyhton));
console.log(calculaMedia(JS));
console.log(calculaMedia(Java));



