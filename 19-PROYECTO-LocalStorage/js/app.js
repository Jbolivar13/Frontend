//Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

//Event Listeners
eventListeners();

function eventListeners(){
    //Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    //Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse( localStorage.getItem('tweets')) || [];

        crearHTML();
    });
}

//Funciones
function agregarTweet(e) {
    e.preventDefault();

    //textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    //Validacion
    if(tweet === '') {
        mostrarError('Un mensaje no puede ir vacio');
        return; //Evita que se ejecuta mas linea de codigo
    }

    const tweetObj = {
        id: Date.now(),
        tweet //Es igual que haga esto: tweet: tweet si tienen nombres iguales se reemplaza con uno solo
    }
    
    //Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];
    
    //Una vez agregado se crea el HTMl 
    crearHTML();

    //Reiniciar el formulario
    formulario.reset();
}


//Mostrar mensaje de error
function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');
    

    //Insertar el error en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);
    
    //Elimina el mensaje despues de 1 segundo
    setTimeout(() => {
        mensajeError.remove();
    }, 1000)
}

//Muestra un listado de los tweets
function crearHTML() {

    LimpiarHTML();

    if(tweets.length > 0) {
        tweets.forEach( tweet => {
            //Agregar un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            //Añadir la funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            //crear el HTML
            const li = document.createElement('li');

            //Añadir el texto
            li.innerText = tweet.tweet; 

            //Asignar el boton
            li.appendChild(btnEliminar);

            //Insertar en HTML
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}

//Agrega los tweets actuales a localStorage 
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//ELimina un tweet 
function borrarTweet(id) {
    tweets = tweets.filter(  tweet => tweet.id !== id);
    crearHTML();
}

//Limpiar HTML
function LimpiarHTML(){

    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}