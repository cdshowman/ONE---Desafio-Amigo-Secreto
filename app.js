//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomesDosAmigos = [];

function adicionarAmigo () {
    let amigo = document.getElementById('amigo').value;
    if (amigo == '') {
        alert("Por favor, insira um nome.")
    } else {
        nomesDosAmigos.push(amigo);
        console.log('O nome foi adicionado');
    }
    limparCampo();
    atualizarListaDeAmigos(nomesDosAmigos);
}

function limparCampo() {
    // amigo = document.querySelector('input');
    amigo = document.getElementById('amigo');
    amigo.value = '';
}

function limparLista () {
    listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML = '';
    nomesDosAmigos = [];
    resultado = document.getElementById('nomeSorteado');
    resultado.innerHTML = 'Quem será o amigo secreto?';
}

function atualizarListaDeAmigos (nomesDosAmigos) {
    let listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML = '';
    for (let amigo of nomesDosAmigos) {
        let itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaDeAmigos.appendChild(itemLista);
    }

}

function sortearAmigo () {
    if (nomesDosAmigos.length === 0) {
        alert('Não há amigos na lista para serem sorteados')
    } else {
        let indice = Math.floor(Math.random() * nomesDosAmigos.length);
        amigoSorteado = nomesDosAmigos[indice];
        let resultado = document.getElementById('nomeSorteado');
        resultado.innerHTML = `O amigo secreto sorteado foi ${amigoSorteado}`;

        nomesDosAmigos.splice(indice, 1);
        atualizarListaDeAmigos(nomesDosAmigos);
    }
}


