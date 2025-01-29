const alunos = ["Ana", "Bruno", "Carlos", "Daniela"];
const medias = [8.5, 7.0, 9.2, 6.8];

const lista = [alunos,medias]


function exibirNomeNota (aluno) {
    if (lista[0].includes(aluno)){
        const [alunos,medias] = lista 
        const indice = alunos.indexOf(aluno);
        const mediaAluno = medias[indice];
        console.log(`${aluno} tem a media ${mediaAluno}`)
    }else{
        console.log('Estudante nao existe')
    }
}

exibirNomeNota('Ana')
exibirNomeNota('Julio')