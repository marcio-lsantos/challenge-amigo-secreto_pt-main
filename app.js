//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Lista que vai armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputNome = document.getElementById('amigo');
    const nome = inputNome.value.trim();
    if (nome === '') {
        alert('Por favor, insira um nome válido!');
        return;
    }
    amigos.push(nome);
    atualizarListaAmigos();
    inputNome.value = '';
    inputNome.focus();
}

// Função para atualizar a lista de amigos no HTML
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        const item = document.createElement('li');
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
     if (amigos.length < 2) {
         alert('Adicione pelo menos dois amigos para realizar o sorteio!');
         return;
     }
     const amigosSorteados = [...amigos];
     const indiceAleatorio = Math.floor(Math.random() * amigosSorteados.length);
     const amigoSorteado = amigosSorteados[indiceAleatorio];
     mostrarResultado([`O amigo secreto sorteado é: ${amigoSorteado}`]);
 }
 
 // Função para exibir os resultados do sorteio
 function mostrarResultado(resultado) {
     const resultadoContainer = document.getElementById('resultado');
     resultadoContainer.innerHTML = '';
     resultado.forEach(item => {
         const li = document.createElement('li');
         li.textContent = item;
         resultadoContainer.appendChild(li);
     });
 }
