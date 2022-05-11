const botonIncremento = document.getElementById('incrementar');
const botonDecremento = document.getElementById('decrementar');
var inicio = 0;

botonIncremento.addEventListener('click', incrementar);
botonDecremento.addEventListener('click', decrementar);

function incrementar() {
    document.getElementById('contador').value = ++inicio;
}

function decrementar(){
    if(inicio >= 1){
        document.getElementById('contador').value = --inicio;
    } 
    else if(inicio <= 0){
        inicio = 0
    } 
}

function openhmbg(){
    document.getElementById("navegacion").style.display = "block";
}