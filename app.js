
//Variables globales
let check = false; //checador generico
let stat; //seleccionador de atributo a tirar dado
let char; //setitem para datos de personaje en localStorage
let pers; //getitem de datos de personaje
let atriset; //setitem para atributos en localStorage
let atriget; //getitem de atributos
let tirar; //chechador de boton para tirar dado
let nodoHistorial; //creacion de nodo de historial de tiradas


//Objeto para datos del personaje
class Aventurero{
    constructor(nombre,raza,clase,nivel){
        this.nombre = nombre.toUpperCase();
        this.raza = raza.toUpperCase();
        this.clase = clase.toUpperCase();
        this.nivel = nivel;
    }
}

//array para crear los atributos del personaje
const personaje = [ str = {id: 0, atributo: "Fuerza", valor: 0, modificador: 0,},
                    dex = {id: 1, atributo: "Destreza", valor: 0, modificador: 0},
                    con = {id: 2, atributo: "Constitucion", valor: 0, modificador: 0},
                    int = {id: 3, atributo: "Inteligencia", valor: 0, modificador: 0},
                    wis = {id: 4, atributo: "Sabiduria", valor: 0, modificador: 0},
                    car = {id: 5, atributo: "Carisma", valor: 0, modificador: 0}]

//Checador y limpiador de localStorage 
if(localStorage.length > 0){
    show();
    showAtribute();
}

//Abre menu para hacer nuevo personaje
let mostrarMenu = document.getElementById("nuevoPersonaje");
mostrarMenu.addEventListener("click", mostrarEsconder);

//llamada de funcion que crea nuevo personaje y guarda datos en storage
let formulario = document.getElementById("creacionPersonaje");
formulario.addEventListener("submit", crearPersonaje);
document.getElementById("creacionPersonaje").reset();

//llama funcio que hace las tiradas de dados
selector(); 

//-------------------------FUNCIONEs----------------------------------------------------------//


//funcion que enseña y esconde menu de creacion de personaje
function mostrarEsconder() {
    document.getElementById("llenadoDatos").classList.toggle("oculto");
}

//funcion que toma los datos del nuevo personaje y los guarda en storage
function crearPersonaje(e) {
    e.preventDefault();
    let nom = document.querySelector("#nombre").value;
    let raz = document.querySelector("#raza").value;
    let cla = document.querySelector("#clase").value;
    let niv = document.querySelector("#nivel").value;    
    let character = [];
    character.push(new Aventurero(nom, raz, cla, niv));
    localStorage.setItem('char', JSON.stringify(character));
    personaje[0].valor = document.querySelector("#stat0").value;
    personaje[1].valor = document.querySelector("#stat1").value;
    personaje[2].valor = document.querySelector("#stat2").value;
    personaje[3].valor = document.querySelector("#stat3").value;
    personaje[4].valor = document.querySelector("#stat4").value;
    personaje[5].valor = document.querySelector("#stat5").value;
    for(i=0;i<6;i++){
        mod(personaje[i].valor);
    }
    localStorage.setItem('atriset', JSON.stringify(personaje));
    location.reload();
    show();
    showAtribute();
}

//funcion que muestra los datos del personaje, usando storage
function show(){
    pers = JSON.parse( localStorage.getItem('char'));

    let nombre = pers[0].nombre;
    let nodoNombre = document.createElement("div");
    nodoNombre.innerHTML = nombre;
    document.getElementById("tituloNombre").appendChild(nodoNombre);

    let raza = pers[0].raza;
    let nodoRaza = document.createElement("div");
    nodoRaza.innerHTML = raza;
    document.getElementById("tituloRaza").appendChild(nodoRaza);

    let clase = pers[0].clase;
    let nodoClase = document.createElement("div");
    nodoClase.innerHTML = clase;
    document.getElementById("tituloClase").appendChild(nodoClase);

    let nivel = pers[0].nivel;
    let nodoNivel = document.createElement("div");
    nodoNivel.innerHTML = nivel;
    document.getElementById("tituloNivel").appendChild(nodoNivel);
}

//Crea los nodos de atributos y crea los nodos de modificadores
function showAtribute(){
    atriget = JSON.parse( localStorage.getItem('atriset').split(","));
    for (const element of atriget) {
        console.log(element);
        let nodoatrib = document.createElement("div");
        nodoatrib.innerHTML = `<div class="tarjetas" id="tarjetas${element.id}">
                                <h3> ${element.atributo} </h3>
                                ${element.valor}
                                <h3>Modificador</h3>
                                <div> ${element.modificador} </div>
                                <button id="toss${element.id}" type="button" onclick="" class="centrar">Tira Dado</button>
                            </div>`;
        document.getElementById("barraAtributo").appendChild(nodoatrib);
    }
}

//funcion que toma el atributo a tirar y el valor del atributo
function selector(){
    tirar = document.getElementById("toss0");
    tirar.onclick = () => {stat = 0; console.log(stat); seleccionTirada()}
    tirar = document.getElementById("toss1"); console.log(stat);
    tirar.onclick = () => {stat = 1; console.log(stat); seleccionTirada()}
    tirar = document.getElementById("toss2"); console.log(stat);
    tirar.onclick = () => {stat = 2; console.log(stat); seleccionTirada()}
    tirar = document.getElementById("toss3"); console.log(stat);
    tirar.onclick = () => {stat = 3; console.log(stat); seleccionTirada()}
    tirar = document.getElementById("toss4"); console.log(stat);
    tirar.onclick = () => {stat = 4; console.log(stat); seleccionTirada()}
    tirar = document.getElementById("toss5"); console.log(stat);
    tirar.onclick = () => {stat = 5; console.log(stat); seleccionTirada()}
}

//funcion que elige el atributo a tirar
function seleccionTirada() {
    switch(stat){
        case 0:
            dados();
            console.log(stat);
            tirada(atriget[stat].atributo, atriget[stat].valor, atriget[stat].modificador);
            break;
        case 1:
            dados();
            tirada(atriget[stat].atributo, atriget[stat].valor, atriget[stat].modificador);
            break;
        case 2:
            dados();
            tirada(atriget[stat].atributo, atriget[stat].valor, atriget[stat].modificador);
            break;
        case 3:
            dados();
            tirada(atriget[stat].atributo, atriget[stat].valor, atriget[stat].modificador);
            break;    
        case 4:
            dados();
            tirada(atriget[stat].atributo, atriget[stat].valor, atriget[stat].modificador);
            break;
        case 5:
            dados();
            tirada(atriget[stat].atributo, atriget[stat].valor, atriget[stat].modificador);
            break;
    }
}

//funcion que chequea que la entrada del usuario este dentro de los parametros establecidos
function chequeo(entrada,bajo,alto){
    check = false;
    if (entrada>=bajo && entrada<=alto) {
        check = true;
    } else {
        alert("Opcion invalida. Repetir proceso")
    }
}

//Funcion que asigna el modificador del stat dependiendo del valor asignado
function mod(statscore){
    switch (true){
        case statscore>=6 && statscore<=9:
            personaje[i].modificador = -1;
            break;
        case statscore>=10 && statscore<=13:
            personaje[i].modificador = 0;
            break;
        case statscore>=14 && statscore<=17:
            personaje[i].modificador = 1;
            break;
        case statscore == 18:
            personaje[i].modificador = 2;
            break;
    }
}

//funcion de tirada de dado
function dados(){
    check = false;
    do {
        dice = Math.floor(Math.random() * 20) + 1;
        chequeo(dice,1,20);
    } while (check == false);    
}

//Funcion que determina el exito de la tirada
function tirada(atri, val, modi){
    final = Number(dice) + Number(atriget[stat].modificador);
    console.log(final);
    switch (true){
        case final <= 1:
            alert("tu total es " + final + " eso es un fallo critico");
            nodoHistorial = document.createElement("div");
            nodoHistorial.className = "tirada";
            nodoHistorial.innerHTML = `<p> Tu tirada es de: ${dice} </p>
                                        <p> Tu ${atri} es de ${val} y tu modificador es ${modi} </p>
                                        Tu total es ${final} . Eso es un fallo critico`;
            document.getElementById("barraHistorial").appendChild(nodoHistorial);
            break;
        case final >= 2 && final <= 5:
            alert("tu total es " + final + " eso es un fallo mayor");
            nodoHistorial = document.createElement("div");
            nodoHistorial.className = "tirada";
            nodoHistorial.innerHTML = `<p> Tu tirada es de: ${dice} </p>
                                        <p> Tu ${atri} es de ${val} y tu modificador es ${modi} </p>
                                        Tu total es ${final} . Eso es un fallo mayor`;
            document.getElementById("barraHistorial").appendChild(nodoHistorial);
            break;
        case final >= 6 && final <= 9:
            alert("tu total es " + final + " eso es un fallo");
            nodoHistorial = document.createElement("div");
            nodoHistorial.className = "tirada";
            nodoHistorial.innerHTML = `<p> Tu tirada es de: ${dice} </p>
                                        <p> Tu ${atri} es de ${val} y tu modificador es ${modi} </p>
                                        Tu total es ${final} . Eso es un fallo`;
            document.getElementById("barraHistorial").appendChild(nodoHistorial);
            break;
        case final >= 10 && final <= 15:
            alert("tu total es " + final + " eso es una tirada pasable");
            nodoHistorial = document.createElement("div");
            nodoHistorial.className = "tirada";
            nodoHistorial.innerHTML = `<p> Tu tirada es de: ${dice} </p>
                                        <p> Tu ${atri} es de ${val} y tu modificador es ${modi} </p>
                                        Tu total es ${final} . Eso es una tirada pasable`;
            document.getElementById("barraHistorial").appendChild(nodoHistorial);
            break;
        case final >= 16 && final <= 19:
            alert("tu total es " + final + " eso es un exito");
            nodoHistorial = document.createElement("div");
            nodoHistorial.className = "tirada";
            nodoHistorial.innerHTML = `<p> Tu tirada es de: ${dice} </p>
                                        <p> Tu ${atri} es de ${val} y tu modificador es ${modi} </p>
                                        Tu total es ${final} . Eso es un exito`;
            document.getElementById("barraHistorial").appendChild(nodoHistorial);
            break;
        case final >= 20:
            alert("tu total es " + final + " eso es un exito critico!");
            nodoHistorial = document.createElement("div");
            nodoHistorial.className = "tirada";
            nodoHistorial.innerHTML = `<p> Tu tirada es de: ${dice} </p>
                                        <p> Tu ${atri} es de ${val} y tu modificador es ${modi} </p>
                                        Tu total es ${final} . Eso es un exito critico!`;
            document.getElementById("barraHistorial").appendChild(nodoHistorial);
            break;
    }
}
