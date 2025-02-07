// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(nombre){
    nombre = document.getElementById('amigo').value;
    amigos.push(nombre);
    limpiarCaja();
    mostrarAmigos();
    return;
}

function limpiarCaja() {
    document.querySelector("#amigo").value = "";
    return;
}

function validarEntrada(){
    document.querySelector("#amigo").value == "" ? alert("Por favor, inserte un nombre") : agregarAmigo();
    limpiarCaja();
    return;
}

function limpiarLista (){
    document.getElementById('listaAmigos').innerHTML = "";
    return;
}

function mostrarAmigos() {
    limpiarLista();
    for (i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    document.getElementById('listaAmigos').appendChild(li);
    }    
    return;
}