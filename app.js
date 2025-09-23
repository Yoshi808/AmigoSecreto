// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

const nombreAmigo = document.getElementById("amigo");

const listaHTML = document.getElementById("listaAmigos");

let indiceAleatorio = 0;

const amigoSorteado = document.getElementById("amigo-sorteado");

function limpiarCaja() {
     nombreAmigo.value = '';
}

function agregarAmigo() {
    if (nombreAmigo.value == '') {
        alert('Por favor ingresa un Nombre.');
    } else {
        listaAmigos.push(nombreAmigo.value);
    }
    limpiarCaja();
    actualizarListaAmigos();
}



function actualizarListaAmigos() {
    listaHTML.innerHTML = '';
    for (let i = 0; i < listaAmigos.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = listaAmigos[i];
        listaHTML.appendChild(li);
        
    }
}


function sortearAmigo() {
    if (listaAmigos.length == 0) {
        alert("Primero debe ingresar el nombre de sus amigos.");
    } else {
        indiceAleatorio = Math.floor(Math.random()*listaAmigos.length);
        amigoSorteado.innerHTML =  `El(La) amigo(a) sorteado(a) es: ${listaAmigos[indiceAleatorio]}`;
    }
}