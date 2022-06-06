// funciones para cambiar datos de destination
async function change0(){
    const response = await fetch("http://127.0.0.1:5500/starter-code/data.json");
    const json = await response.json();

    //borde
    document.getElementById('moon').style.borderBottom = '2px solid white';
    document.getElementById('mars').style.borderBottom = 'none';
    document.getElementById('europa').style.borderBottom = 'none';
    document.getElementById('titan').style.borderBottom = 'none';

    //Cambia la informacion de acuerdo al planeta elegido 
    document.getElementById('imagen').src = json.destinations[0].images.png;
    document.getElementById('planet').textContent = json.destinations[0].name;
    document.getElementById('text').textContent = json.destinations[0].description;
    document.getElementById('km').textContent = json.destinations[0].distance;
    document.getElementById('day').textContent = json.destinations[0].travel;    
}



async function change1(){
    const response = await fetch("http://127.0.0.1:5500/starter-code/data.json");
    const json = await response.json();

    //borde
    document.getElementById('moon').style.borderBottom = 'none';
    document.getElementById('mars').style.borderBottom = '2px solid white';
    document.getElementById('europa').style.borderBottom = 'none';
    document.getElementById('titan').style.borderBottom = 'none';

    //Cambia la informacion de acuerdo al planeta elegido
    document.getElementById('imagen').src = json.destinations[1].images.png;
    document.getElementById('planet').textContent = json.destinations[1].name;
    document.getElementById('text').textContent = json.destinations[1].description;
    document.getElementById('km').textContent = json.destinations[1].distance;
    document.getElementById('day').textContent = json.destinations[1].travel;
    
}

async function change2(){
    const response = await fetch("http://127.0.0.1:5500/starter-code/data.json");
    const json = await response.json();

     //borde
     document.getElementById('moon').style.borderBottom = 'none';
     document.getElementById('mars').style.borderBottom = 'none';
     document.getElementById('europa').style.borderBottom = '2px solid white';
     document.getElementById('titan').style.borderBottom = 'none';
    
    //Cambia la informacion de acuerdo al planeta elegido
    document.getElementById('imagen').src = json.destinations[2].images.png;
    document.getElementById('planet').textContent = json.destinations[2].name;
    document.getElementById('text').textContent = json.destinations[2].description;
    document.getElementById('km').textContent = json.destinations[2].distance;
    document.getElementById('day').textContent = json.destinations[2].travel;
}

async function change3(){
    const response = await fetch("http://127.0.0.1:5500/starter-code/data.json");
    const json = await response.json();
    
     //borde
     document.getElementById('moon').style.borderBottom = 'none';
     document.getElementById('mars').style.borderBottom = 'none';
     document.getElementById('europa').style.borderBottom = 'none';
     document.getElementById('titan').style.borderBottom = '2px solid white';

    //Cambia la informacion de acuerdo al planeta elegido
    document.getElementById('imagen').src = json.destinations[3].images.png;
    document.getElementById('planet').textContent = json.destinations[3].name;
    document.getElementById('text').textContent = json.destinations[3].description;
    document.getElementById('km').textContent = json.destinations[3].distance;
    document.getElementById('day').textContent = json.destinations[3].travel;
}

//funciones para cambiar datos de crew
async function cambio1(){
    const response = await fetch("http://127.0.0.1:5500/starter-code/data.json");
    const json = await response.json();
    
     //color
     document.getElementById('btn0').style.backgroundColor = 'white';
     document.getElementById('btn1').style.backgroundColor = 'rgba(184, 184, 184, 0.5)';
     document.getElementById('btn2').style.backgroundColor = 'rgba(184, 184, 184, 0.5)';
     document.getElementById('btn3').style.backgroundColor = 'rgba(184, 184, 184, 0.5)';

    //Cambia la informacion de acuerdo a la persona elegida
    document.getElementById('foto').src = json.crew[0].images.png;
    document.getElementById('cargo').textContent = json.crew[0].role;
    document.getElementById('nombre').textContent = json.crew[0].name;
    document.getElementById('reseña').textContent = json.crew[0].bio;
}

async function cambio2(){
    const response = await fetch("http://127.0.0.1:5500/starter-code/data.json");
    const json = await response.json();
    
     //color
     document.getElementById('btn0').style.backgroundColor = 'rgba(184, 184, 184, 0.5)';
     document.getElementById('btn1').style.backgroundColor = 'white';
     document.getElementById('btn2').style.backgroundColor = 'rgba(184, 184, 184, 0.5)';
     document.getElementById('btn3').style.backgroundColor = 'rgba(184, 184, 184, 0.5)';

    //Cambia la informacion de acuerdo a la persona elegida
    document.getElementById('foto').src = json.crew[1].images.png;
    document.getElementById('cargo').textContent = json.crew[1].role;
    document.getElementById('nombre').textContent = json.crew[1].name;
    document.getElementById('reseña').textContent = json.crew[1].bio;
}

async function cambio3(){
    const response = await fetch("http://127.0.0.1:5500/starter-code/data.json");
    const json = await response.json();
    
     //color
     document.getElementById('btn0').style.backgroundColor = 'rgba(184, 184, 184, 0.5)';
     document.getElementById('btn1').style.backgroundColor = 'rgba(184, 184, 184, 0.5)';
     document.getElementById('btn2').style.backgroundColor = 'white';
     document.getElementById('btn3').style.backgroundColor = 'rgba(184, 184, 184, 0.5)';

    //Cambia la informacion de acuerdo a la persona elegida
    document.getElementById('foto').src = json.crew[2].images.png;
    document.getElementById('cargo').textContent = json.crew[2].role;
    document.getElementById('nombre').textContent = json.crew[2].name;
    document.getElementById('reseña').textContent = json.crew[2].bio;
}

async function cambio4(){
    const response = await fetch("http://127.0.0.1:5500/starter-code/data.json");
    const json = await response.json();
    
     //color
     document.getElementById('btn0').style.backgroundColor = 'rgba(184, 184, 184, 0.5)';
     document.getElementById('btn1').style.backgroundColor = 'rgba(184, 184, 184, 0.5)';
     document.getElementById('btn2').style.backgroundColor = 'rgba(184, 184, 184, 0.5)';
     document.getElementById('btn3').style.backgroundColor = 'white';

    //Cambia la informacion de acuerdo a la persona elegida
    document.getElementById('foto').src = json.crew[3].images.png;
    document.getElementById('cargo').textContent = json.crew[3].role;
    document.getElementById('nombre').textContent = json.crew[3].name;
    document.getElementById('reseña').textContent = json.crew[3].bio;
}


// Technology

async function btn1(){
    const response = await fetch("http://127.0.0.1:5500/starter-code/data.json");
    const json = await response.json();
    
     //color
     document.getElementById('btn_tech1').style.backgroundColor = 'white';
     document.getElementById('btn_tech1').style.color = 'black';
     document.getElementById('btn_tech2').style.backgroundColor = 'transparent';
     document.getElementById('btn_tech2').style.color = 'white';
     document.getElementById('btn_tech3').style.backgroundColor = 'transparent';
     document.getElementById('btn_tech3').style.color = 'white';

    //Cambia la informacion de acuerdo a la persona elegida
    document.getElementById('images').src = json.technology[0].images.portrait;
    document.getElementById('name').textContent = json.technology[0].name;
    document.getElementById('description').textContent = json.technology[0].description;
}

async function btn2(){
    const response = await fetch("http://127.0.0.1:5500/starter-code/data.json");
    const json = await response.json();
    
     //color
     document.getElementById('btn_tech1').style.backgroundColor = 'transparent';
     document.getElementById('btn_tech1').style.color = 'white';
     document.getElementById('btn_tech2').style.backgroundColor = 'white';
     document.getElementById('btn_tech2').style.color = 'black';
     document.getElementById('btn_tech3').style.backgroundColor = 'transparent';
     document.getElementById('btn_tech3').style.color = 'white';

    //Cambia la informacion de acuerdo a la persona elegida
    document.getElementById('images').src = json.technology[1].images.portrait;
    document.getElementById('name').textContent = json.technology[1].name;
    document.getElementById('description').textContent = json.technology[1].description;
}

async function btn3(){
    const response = await fetch("http://127.0.0.1:5500/starter-code/data.json");
    const json = await response.json();
    
     //color
     document.getElementById('btn_tech1').style.backgroundColor = 'transparent';
     document.getElementById('btn_tech1').style.color = 'white';
     document.getElementById('btn_tech2').style.backgroundColor = 'transparent';
     document.getElementById('btn_tech2').style.color = 'white';
     document.getElementById('btn_tech3').style.backgroundColor = 'white';
     document.getElementById('btn_tech3').style.color = 'black';

    //Cambia la informacion de acuerdo a la persona elegida
    document.getElementById('images').src = json.technology[2].images.portrait;
    document.getElementById('name').textContent = json.technology[2].name;
    document.getElementById('description').textContent = json.technology[2].description;
}