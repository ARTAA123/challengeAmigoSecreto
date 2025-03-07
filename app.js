// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if(nombre.length == 0){
        alert('Por favor, inserte un nombre.')
    }else {
        amigos.push(nombre);
        limpiarCaja();
        listarAmigos(amigos);
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
    return;
}

function listarAmigos(amigos){
    //Designa el elemento donde se iniciara la lista
    let lista = document.getElementById("listaAmigos");

    //Limpi elemento antes de listar.
    lista.innerHTML = "";

    //Recorre la lista y crea los elementos li
    for(const amigo of amigos){
        const li = document.createElement("li");

        //Incluye el nombre del amigo en la lista
        li.textContent = amigo;

        //Agrega el elemento a la lista final a mostrar
        lista.appendChild(li);
    }
    return;
}

function sortearAmigo(){
    let tamaño = amigos.length;
    if(tamaño ===0){
        alert("Agregue nombres a la lista primero.")
    } else {
        let indice = Math.floor(Math.random()*tamaño-1)+1;
        let eleccion = amigos[indice];
        let mostrarNombreElegido = document.getElementById('resultado');
        mostrarNombreElegido.innerHTML = eleccion;
    }
    return;
}
