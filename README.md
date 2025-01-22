
# Challenge: Sorteio de Amigo Secreteo

Repositório no Github para armazenar códido do desafio
Link do desafio: [Sorteio de Amigo Serceto](http://127.0.0.1:5500/index.html)

🙌😎🤞

## Código em HTML 

```
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700;900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
    <title>Amigo Secreto</title>
</head>

<body>
    <main class="main-content">
        <header class="header-banner">
            <h1 class="main-title">Amigo Secreto</h1>
            <img src="assets/amigo-secreto.png" alt="Imagem representativa de amigo secreto">
        </header>
        
        <section class="input-section">
            <h2 class="section-title">Digite o nome dos seus amigos</h2>
            <div class="input-wrapper">
                <input type="text" id="amigo" class="input-name" placeholder="Digite um nome">
                <button class="button-add" onclick="adicionarAmigo()">Adicionar</button>
            </div>
           
            <ul id="listaAmigos" class="name-list" aria-labelledby="listaAmigos" role="list"></ul>
            <ul id="resultado" class="result-list" aria-live="polite"></ul>

            <div class="button-container">
                <button class="button-draw" onclick="sortearAmigo()" aria-label="Sortear amigo secreto">
                    <img src="assets/play_circle_outline.png" alt="Ícone para sortear">
                    Sortear amigo
                </button>
            </div>
        </section>
    </main>

    <script src="app.js" defer></script>
</body>
</html>
```

## Código em css

```
:root {
    --color-primary: #4B69FD;
    --color-secondary: #FFF9EB;
    --color-tertiary: #C4C4C4;
    --color-button: #fe652b;
    --color-button-hover: #e55720;
    --color-text: #444444;
    --color-white: #FFFFFF;
}

/* Estilos gerais */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    height: 100vh;
    background-color: var(--color-primary);
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

/* Banner */
.header-banner {
    flex: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0 0;
}

/* Seção de entrada */
.input-section {
    flex: 60%;
    background-color: var(--color-secondary);
    border: 1px solid #000;
    border-radius: 64px 64px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
}

/* Títulos */
.main-title {
    font-size: 48px;
    font-family: "Merriweather", serif;
    font-weight: 900;
    font-style: italic;
    color: var(--color-white);
}

.section-title {
    font-family: "Inter", serif;
    font-size: 36px;
    font-weight: 700;
    color: var(--color-primary);
    margin: 10px 0;
    text-align: center;
}

/* Contêineres de entrada e botão */
.input-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 600px;
    margin-top: 20px;
}

.input-name {
    width: 100%;
    padding: 10px;
    border: 2px solid #000;
    border-radius: 25px 0 0 25px;
    font-size: 16px;
}

.button-container {
    width: 300px;
    justify-content: center;
}

/* Estilos de entrada de texto */
.input-title {
    flex: 1;
    padding: 10px 15px;
    font-size: 16px;
    border: 2px solid #333;
    border-right: none;
    border-radius: 25px 0 0 25px;
    font-family: "Merriweather", serif;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

/* Estilos de botão */
button {
    padding: 15px 30px;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    border: 2px solid #000;
    border-radius: 25px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    cursor: pointer;
}

.button-add {
    background-color: var(--color-tertiary);
    color: var(--color-text);
    border-radius: 0 25px 25px 0;
}

.button-add:hover {
    background-color: #a1a1a1;
}

/* Listas */
ul {
    list-style-type: none;
    color: var(--color-text);
    font-family: "Inter", sans-serif;
    font-size: 18px;
    margin: 20px 0;
}

.result-list {
    margin-top: 15px;
    color: #05DF05;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
}

/* Botão de sortear título */
.button-draw {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 40px;
    color: var(--color-white);
    background-color: var(--color-button);
    font-size: 16px;
}

.button-draw img {
    margin-right: 40px;
}

.button-draw:hover {
    background-color: var(--color-button-hover);
}
```
## Código em js
```
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

```




## Autor

- [@Lilian-Moraes](https://www.github.com/Lilian-Moraes)