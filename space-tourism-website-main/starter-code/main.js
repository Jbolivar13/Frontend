async function obtenerDatos(){
    const response = await fetch("http://127.0.0.1:5500/starter-code/data.json");
    const json = await response.json();

    console.log(json.destinations[1]);

}
obtenerDatos();