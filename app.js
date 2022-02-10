
//Variables globales
let check = false; //checador generico
let checkLocal; //checador de localStorage
let stat = 0; //seleccionador de atributo a tirar dado
let char; //setitem para datos de personaje en localStorage
let pers; //getitem de datos de personaje
let atriset; //setitem para atributos en localStorage
let atriget; //getitem de atributos
let nodoHistorial; //creacion de nodo de historial de tiradas

//Checador de localStorage
if(localStorage.length > 0){
    checkLocal = confirm("Ya existe personaje, quieres crear otro?")
}

//Objeto para datos del personaje
class Aventurero{
    constructor(nombre,raza,clase,nivel){
        this.nombre = nombre.toUpperCase();
        this.raza = raza.toUpperCase();
        this.clase = clase.toUpperCase();
        this.nivel = nivel;
    }
    lvl(){
        do {
            this.nivel = prompt("Ingresa el nivel del personaje(tiene que ser entre 1 y 20)")
            chequeo(this.nivel,1,20);
        } while (check == false);
    }
}

//array para crear los atributos del personaje
const personaje = [ str = {atributo: "Fuerza", valor: 0, modificador: 0,},
                    dex = {atributo: "Destreza", valor: 0, modificador: 0},
                    con = {atributo: "Constitucion", valor: 0, modificador: 0},
                    int = {atributo: "Inteligencia", valor: 0, modificador: 0},
                    wis = {atributo: "Sabiduria", valor: 0, modificador: 0},
                    car = {atributo: "Carisma", valor: 0, modificador: 0}]

function crearPersonaje(e) {
    e.preventDefault();
    let nom = document.querySelector("#nombre").value;
    let raz = document.querySelector("#raza").value;
    let cla = document.querySelector("#clase").value;
    let niv = document.querySelector("#nivel").value;
    let personaje = [];
    personaje.push(new Aventurero(nom, raz, cla, niv));
    localStorage.setItem('char', JSON.stringify(personaje));
}

let formulario = document.getElementById("creacionPersonaje");
formulario.addEventListener("submit", crearPersonaje);

show(); //toma los datos guardados, crea divs y los muestra en sus respectivos lugares
showAtribute(); //funcion que muestra atributos y modificadores

do {
    selector(); //Selecciona el atributo para el que tiraran los dados
    switch(stat){
        case 0:
            dados();
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
    check = confirm("hacer otra tirada?");
    console.log(check);
} while (check == true);

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
        nodoatrib.innerHTML = `<div>
                                <h3> ${element.atributo} </h3>
                                ${element.valor}
                                <h3>Modificador</h3>
                                <div> ${element.modificador} </div>
                            </div>`;
        document.getElementById("barraAtributo").appendChild(nodoatrib);
    }
}

//funcion que toma el atributo a tirar y el valor del atributo
function selector(){
    do {
        stat = prompt("Elige el numero de uno de los siguientes atributos: \n 1.Fuerza \n 2.Destreza \n 3.Constitucion \n 4.Inteligencia \n 5.Sabiduria \n 6.Carisma");
        chequeo(stat,1,6);
        stat = Number(stat)-1;
        console.log(stat);
    } while (check == false);
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
        dice = prompt("tira un dado de 20 caras y anota el resultado");
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

//arregla el array de atributos usando los valores de mayor a manor
let statsorter = atriget.sort((a, b) => b.valor - a.valor);
document.write("<br> estos son tus atributos ordenados de mayor a menor: <br>");
for (i=0;i<6;i++){
    document.write(" " + statsorter[i].atributo + " : " + statsorter[i].valor);
}
