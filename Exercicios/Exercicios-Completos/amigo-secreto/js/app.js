let amigos = []; // Array para armazenar os nomes dos amigos

// Função para adicionar nome à lista de amigos
function adicionar() {
const inputNome = document.getElementById('nome-amigo');
const nome = inputNome.value.trim();

if (nome !== "") {
    amigos.push(nome); // Adiciona o nome ao array
    atualizarLista(); // Atualiza a lista de amigos exibida
    inputNome.value = ''; // Limpa o campo de input
} else {
    alert('Por favor, insira um nome.');
}
}

// Função para atualizar a lista de amigos no HTML
function atualizarLista() {
const listaAmigos = document.getElementById('lista-amigos');
listaAmigos.innerHTML = amigos.join(', '); // Exibe os nomes separados por vírgula
}

// Função para sortear o Amigo Secreto
function sortear() {
if (amigos.length < 2) {
    alert('Adicione pelo menos dois amigos para realizar o sorteio.');
    return;
}

const sorteados = [...amigos]; // Copia a lista original para não modificar o array 'amigos'
const resultado = [];

while (sorteados.length > 0) {
    const amigo1 = sorteados.pop(); // Remove o último elemento da lista
    const indexAmigo2 = Math.floor(Math.random() * sorteados.length);
    const amigo2 = sorteados.splice(indexAmigo2, 1)[0]; // Remove o segundo amigo sorteado

    resultado.push(`${amigo1} tira ${amigo2}`);
}

const listaSorteio = document.getElementById('lista-sorteio');
listaSorteio.innerHTML = resultado.join('<br>'); // Exibe o resultado do sorteio
}

// Função para reiniciar a lista de amigos e o sorteio
function reiniciar() {
amigos = []; // Limpa o array de amigos
document.getElementById('lista-amigos').innerHTML = ''; // Limpa a lista de amigos exibida
document.getElementById('lista-sorteio').innerHTML = ''; // Limpa o resultado do sorteio
}
