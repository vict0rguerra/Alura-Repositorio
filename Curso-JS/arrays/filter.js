const alunos = ['Joao', 'Ana', 'Caio' ,'Leo'];
const medias = [10, 6.5, 8, 7.5];

const reprovados = alunos.filter(( _ , indice) => {
    return medias[indice] < 7 ; 
})

console.log(reprovados);
