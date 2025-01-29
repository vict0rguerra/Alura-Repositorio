const notaFinal = 7
const faltas = 3 
const advertencias = 0 


if(notaFinal < 7 && faltas > 4 ){
    console.log("reprovado");
}else{
    console.log("passou")
}

if(faltas >= 2 && !advertencias ){
    console.log("bonus nota");
}else{
    console.log("sem bonus")
}