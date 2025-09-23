// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let listaParticipantes = [];

const inputParticipante = document.getElementById("participante");

const listaHTMLParticipantes = document.getElementById("listaParticipantes");

let indiceSeleccionado = 0;

const participanteSeleccionado = document.getElementById("participante-seleccionado");

function limpiarInput() {
     inputParticipante.value = '';
}

function agregarParticipante() {
    if (inputParticipante.value == '') {
        alert('Es necesario ingresar el nombre de un participante.');
    } else {
        listaParticipantes.push(inputParticipante.value);
    }
    limpiarInput();
    actualizarListaParticipantes();
}

function actualizarListaParticipantes() {
    listaHTMLParticipantes.innerHTML = '';
    for (let i = 0; i < listaParticipantes.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = listaParticipantes[i];
        listaHTMLParticipantes.appendChild(li);
    }
}

function seleccionarParticipante() {
    if (listaParticipantes.length == 0) {
        alert("Primero debes agregar al menos un participante.");
    } else {
        indiceSeleccionado = Math.floor(Math.random()*listaParticipantes.length);
        participanteSeleccionado.innerHTML =  `¡Felicidades! El(La) participante seleccionado(a) es: ${listaParticipantes[indiceSeleccionado]}`;
    }
}
