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

//---------------------RUN-----------------------------------------------------------------------//

//Checador y limpiador de localStorage 
if(localStorage.length > 0){
    show();
    showAtribute();
    selector(); 
}

//llamada de funcion que crea nuevo personaje y guarda datos en storage
let formulario = document.getElementById("creacionPersonaje");
formulario.addEventListener("submit", crearPersonaje);
document.getElementById("creacionPersonaje").reset();

//-------------------------FUNCIONES----------------------------------------------------------//

//Funcion que toma datos de DnD5e api para la creacion de personaje
$(()=>{
    let xhttp=new XMLHttpRequest()
    xhttp.open("GET",`https://www.dnd5eapi.co/api/races`)
    xhttp.send()
    xhttp.onreadystatechange=function () {
        if(this.readyState==4 && this.status==200){
            let tmp=JSON.parse( this.responseText)
            let datos=(tmp.results)
            console.log(datos)
            for (i =0; i< datos.length; i++) {
                $("#raza").append(`<option value="${datos[i].name}">${datos[i].name}</option>`);
            }
        }
    }
    xhttp=new XMLHttpRequest()
    xhttp.open("GET",`https://www.dnd5eapi.co/api/classes`)
    xhttp.send()
    xhttp.onreadystatechange=function () {
        if(this.readyState==4 && this.status==200){
            tmp=JSON.parse( this.responseText)
            datos=(tmp.results)
            console.log(datos)
            for (i =0; i< datos.length; i++) {
                $("#clase").append(`<option value="${datos[i].name}">${datos[i].name}</option>`);
            }
        }
    }
})

//funcion que enseña y esconde menu de creacion de personaje
$("#nuevoPersonaje").click(function () { 
    $("#llenadoDatos").slideToggle(1000);        
});

//funciones de animacion de boton de creacion de personaje
$(()=>{
    $("#nuevoPersonaje").hover(function () {
            $("#nuevoPersonaje").animate({
                fontSize: '1rem'
            })        
        }, function () {
            $("#nuevoPersonaje").animate({
                fontSize: '.8rem'
            })  
        }
    );
})

//funcion de animacion de botones de tirada de dados
function apretar(boton) {
    $(`#toss${boton}`).animate({width: "4rem"});
    $(`#toss${boton}`).animate({width: "5rem"});
}

//funcion de animacion para historial de tiradas
function ensenaTirada() {
    $('.tirada').fadeIn(2000);
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
    $("#tituloNombre").append(pers[0].nombre);
    $("#tituloRaza").append(pers[0].raza);
    $("#tituloClase").append(pers[0].clase);
    $("#tituloNivel").append(pers[0].nivel);
}

//Crea los nodos de atributos y crea los nodos de modificadores
function showAtribute(){
    atriget = JSON.parse( localStorage.getItem('atriset').split(","));
    for (const element of atriget) {
        console.log(element);
        $("#barraAtributo").append(`<div class="tarjetas" id="tarjetas${element.id}">
                                        <h3> ${element.atributo} </h3>
                                        ${element.valor}
                                        <h3>Modificador</h3>
                                        <div> ${element.modificador} </div>
                                        <button id="toss${element.id}" type="button" onclick="" class="btn">Tira Dado</button>
                                    </div>`)
    }
}

//funcion que toma el atributo a tirar y el valor del atributo
function selector(){
    atriget.forEach(element => {
        $(`#toss${element.id}`).on('click',()=>{
            stat = element.id;
            apretar(stat);
            dados();
            tirada(atriget[stat].atributo, atriget[stat].valor, atriget[stat].modificador);
        });
    });
}

//funcion que chequea que la entrada del usuario este dentro de los parametros establecidos
function chequeo(entrada,bajo,alto){
    check = false;
    if (entrada>=bajo && entrada<=alto) {
        check = true;
    } else {
        swal("Opcion invalida. Repetir proceso")
    }
}

//Funcion que asigna el modificador del stat dependiendo del valor asignado
function mod(statscore){
    switch (true){
        case statscore>=6 && statscore<=7:
            personaje[i].modificador = -2;
            break;
        case statscore>=8 && statscore<=9:
            personaje[i].modificador = -1;
            break;
        case statscore>=10 && statscore<=11:
            personaje[i].modificador = 0;
            break;
        case statscore>=12 && statscore<=13:
            personaje[i].modificador = 1;
            break;
        case statscore>=14 && statscore<=15:
            personaje[i].modificador = 2;
            break;
        case statscore>=16 && statscore<=17:
            personaje[i].modificador = 3;
            break;            
        case statscore == 18:
            personaje[i].modificador = 4;
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
            swal(   {title: atriget[stat].atributo,
                    text: "tu total es " + final + " eso es un fallo critico"});
            $("#barraHistorial").prepend(`<div class="tirada">
                                                <p> Tu tirada es de: ${dice} </p>
                                                <p> Tu ${atri} es de ${val} y tu modificador es ${modi} </p>
                                                <p>Tu total es ${final} . Eso es un fallo critico</p>
                                            </div>`)
            ensenaTirada();
            break;
        case final >= 2 && final <= 5:
            swal(   {title: atriget[stat].atributo,
                    text: "tu total es " + final + " eso es un fallo mayor"});
            $("#barraHistorial").prepend(`<div class="tirada">
                                                <p> Tu tirada es de: ${dice} </p>
                                                <p> Tu ${atri} es de ${val} y tu modificador es ${modi} </p>
                                                <p>Tu total es ${final} . Eso es un fallo mayor </p>
                                            </div>`)
            ensenaTirada();
            break;
        case final >= 6 && final <= 9:
            swal(   {title: atriget[stat].atributo,
                    text: "tu total es " + final + " eso es un fallo"});
            $("#barraHistorial").prepend(`<div class="tirada">
                                                <p> Tu tirada es de: ${dice} </p>
                                                <p> Tu ${atri} es de ${val} y tu modificador es ${modi} </p>
                                                <p>Tu total es ${final} . Eso es un fallo </p>
                                            </div>`)
            ensenaTirada();
            break;
        case final >= 10 && final <= 15:
            swal(   {title: atriget[stat].atributo,
                    text: "tu total es " + final + " eso es una tirada pasable"});
            $("#barraHistorial").prepend(`<div class="tirada">
                                                <p> Tu tirada es de: ${dice} </p>
                                                <p> Tu ${atri} es de ${val} y tu modificador es ${modi} </p>
                                                <p>Tu total es ${final} . Eso es una tirada pasable </p>
                                            </div>`)
            ensenaTirada();
            break;
        case final >= 16 && final <= 19:
            swal(   {title: atriget[stat].atributo,
                    text: "tu total es " + final + " eso es un exito!"});
            $("#barraHistorial").prepend(`<div class="tirada">
                                                <p> Tu tirada es de: ${dice} </p>
                                                <p> Tu ${atri} es de ${val} y tu modificador es ${modi} </p>
                                                <p>Tu total es ${final} . Eso es un exito! </p>
                                            </div>`)
            ensenaTirada();
            break;
        case final >= 20:
            swal(   {title: atriget[stat].atributo,
                    text: "tu total es " + final + " eso es un EXITO CRITICO!"});
            $("#barraHistorial").prepend(`<div class="tirada">
                                                <p> Tu tirada es de: ${dice} </p>
                                                <p> Tu ${atri} es de ${val} y tu modificador es ${modi} </p>
                                                <p>Tu total es ${final} . Eso es un EXITO CRITICO! </p>
                                            </div>`)
            ensenaTirada();
            break;
    }
}
