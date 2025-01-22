//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// array para armazenar os nomes dos amigos
let amigos = [];

// função para adicionar um amigo ao array
function adicionarAmigo() {
    // capturar o valor de entrada
    const nomeAmigo = document.getElementById('amigo').value;
    // validar entrada
    if (nomeAmigo == '') {
        // exibir alerta de erro
        alert('Por favor, inserir nome do amigo');
    } else {
        // adicionar nome ao array
        amigos.push(nomeAmigo);
        // limpar campo de entrada
        document.getElementById('amigo').value = '';
        // adicionar nomes a lista na tela
        adicionarNomeNaLista(nomeAmigo);
    }
}

// função para exibir os amigos
function adicionarNomeNaLista(nome) {
    const listaAmigos = document.getElementById('listaAmigos');
    const novoitem = document.createElement('li');
    novoitem.textContent = nome;
    listaAmigos.appendChild(novoitem);
}

// função para sortear amigo
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // limpar resultado anterior

    if (amigos.length === 0) {
        alert("Adicione amigos antes de sortear");
        return;
    }
    //Aqui você deve implementar a lógica para sortear o amigo secreto.
    //Por exemplo, usando uma função para embaralhar o array e atribuir aleatoriamente.

    //Exemplo simples (sem embaralhar, apenas para demonstração):
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const novoItem = document.createElement('li');
    novoItem.textContent = `Seu amigo secreto é: ${amigoSorteado}`;
    resultado.appendChild(novoItem);    
}
