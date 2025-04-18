let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value.trim();

    if (!nomeAmigo) {
        alert("Por favor, digite o nome do(a) amigo(a)!");
    } else if (amigos.includes(nomeAmigo)) {
        alert("Este nome já está na lista!");
        return;
    } else {
        amigos.push(nomeAmigo);
    }

    atualizarListaAmigos();
    inputAmigo.value = "";
}

function atualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione mais amigos para sortear!");
        return;
    } else {
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        let resultado = document.getElementById("resultado");
        resultado.textContent = `O(A) amigo(a) sorteado(a) é: ${amigoSorteado}! 🎉`;
    }
}

function reiniciarSorteio() {
    let resultado = document.getElementById("resultado");
    resultado.textContent = "";
    amigos = [];
    atualizarListaAmigos();
    alert("Novo sorteio!");
}
