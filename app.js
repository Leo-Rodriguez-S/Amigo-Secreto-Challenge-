//Arreglo que contendrá los amigos que jugarán
let amigos = [];

//Se valida si se ingresaron datos, en caso afirmativo, se agregan los mismos, 
//En caso de no haber datos, se le alerta al usuario
//Se limpia el input
function agregarAmigo(nombre){
    if (document.querySelector("#amigo").value === "") {
        alert("Por favor, inserte un nombre");
    }else{
    nombre = document.getElementById('amigo').value;
    amigos.push(nombre);
    mostrarAmigos();
    limpiarCaja();
    }
    return;
}

//Se limpia el input
function limpiarCaja() {
    document.querySelector("#amigo").value = "";
    return;
}

//Se limpia la lista HTML de los amigos participantes en el juego
function limpiarLista (){
    document.getElementById('listaAmigos').innerHTML = "";
    return;
}

//Se actualiza la lista HTML con los nombres que se agregan en el arreglo, y se limpia la lista para que no muestre datos duplicados
function mostrarAmigos() {
    limpiarLista();
    for (i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    document.getElementById('listaAmigos').appendChild(li);
    }    
    return;
}

//Se valida si la lista de amigos tiene datos y en caso afirmativo, se selecciona un amigo secreto aleatoriamente, limpiando la lista de participantes a su vez. Si no hay datos, se le alerta al usuario.
function sortearAmigo() {
    if(amigos.length === 0){
        alert ("Por favor ingrese los amigos que jugarán");
    }else {
        let numNombre = Math.floor(Math.random()*amigos.length);
        limpiarLista();
        document.querySelector('#resultado').innerHTML = `Tu amigo secreto es: ${amigos[numNombre]}`;
    }
    return;
}