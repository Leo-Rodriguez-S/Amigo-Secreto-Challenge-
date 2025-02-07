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