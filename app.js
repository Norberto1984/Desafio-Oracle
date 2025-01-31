let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    
    if (nome === "") {
        alert("Por favor, insira algum nome.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = ""; // Limpar o campo após adicionar
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}
function resetarLista() {
    amigos = [];
    atualizarLista();
    document.getElementById("resultado").innerHTML = "";
    alert("Lista de amigos resetada!");
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "Sorteando... 🎲";
    
    let tempo = 0;
    const interval = setInterval(() => {
        const indiceTemp = Math.floor(Math.random() * amigos.length);
        resultadoLista.innerHTML = amigos[indiceTemp];
        tempo += 200;
        
        if (tempo >= 2000) { // Após 2 segundos, para o sorteio
            clearInterval(interval);
            const indiceSorteado = Math.floor(Math.random() * amigos.length);
            resultadoLista.innerHTML = `🎉 ${amigos[indiceSorteado]} 🎉`;
        }
    }, 200);
}

// Adiciona um evento para detectar a tecla "Enter" no campo de entrada
document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        adicionarAmigo(); // Chama a função para adicionar o nome
    }
});


function exibirResultado(sorteados) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";

    sorteados.forEach((sorteado) => {
        const item = document.createElement("li");
        item.textContent = sorteado;
        resultadoLista.appendChild(item);
    });
}
