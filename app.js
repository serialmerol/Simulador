let check = false;
let stat = 0;
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
    show(){
        document.write("tu personaje nivel: " + this.nivel + " se llama: " + this.nombre + " es de raza: " + this.raza + " y es de clase: " + this.clase +"<br>");
    
    }
}
const newChar = new Aventurero( prompt("Ingresa el nombre del personaje"),
                            prompt("Ingresa la raza del personaje"),
                            prompt("Ingresa la clase del personaje"));
newChar.lvl();
newChar.show();

const personaje = [ str = {atributo: "Fuerza", valor: 0, modificador: 0,},
                    dex = {atributo: "Destreza", valor: 0, modificador: 0},
                    con = {atributo: "Constitucion", valor: 0, modificador: 0},
                    int = {atributo: "Inteligencia", valor: 0, modificador: 0},
                    wis = {atributo: "Sabiduria", valor: 0, modificador: 0},
                    car = {atributo: "Carisma", valor: 0, modificador: 0}]
for(i=0;i<6;i++){
    do {
        personaje[i].valor = prompt("Ingresa un valor entre 6 y 18 para tu " + personaje[i].atributo);
        chequeo(personaje[i].valor,6,18); //chequeo de entrada de datos
    } while (check == false);
    mod(personaje[i].valor); //asignacion de modificadores
    document.write( personaje[i].atributo, " --- ", personaje[i].valor, " --- ", personaje[i].modificador, "<br>");
}

do {
    selector(); //elecciona el atributo para el que tiraran los dados
    switch(stat){
        case 0:
            dados(personaje[stat].atributo, personaje[stat].valor, personaje[stat].modificador);
            tirada();
            break;
        case 1:
            dados(personaje[stat].atributo, personaje[stat].valor, personaje[stat].modificador);
            tirada();
            break;
        case 2:
            dados(personaje[stat].atributo, personaje[stat].valor, personaje[stat].modificador);
            tirada();
            break;
        case 3:
            dados(personaje[stat].atributo, personaje[stat].valor, personaje[stat].modificador);
            tirada();
            break;    
        case 4:
            dados(personaje[stat].atributo, personaje[stat].valor, personaje[stat].modificador);
            tirada();
            break;
        case 5:
            dados(personaje[stat].atributo, personaje[stat].valor, personaje[stat].modificador);
            tirada();
            break;
    }
    check = confirm("hacer otra tirada?");
    console.log(check);
} while (check == true);

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
function dados(atri,val, modi){
    document.write("Tu " + atri + " es de "+ val + " tu modificador es " + modi);
    check = false;
    do {
        dice = prompt("tira un dado de 20 caras y anota el resultado");
        chequeo(dice,1,20);
    } while (check == false);    
}

//Funcion que determina el exito de la tirada
function tirada(){
    final = Number(dice) + Number(personaje[stat].modificador);
    console.log(final);
    document.write("<br>" + "tu tirada es de: " + dice);
    switch (true){
        case final <= 1:
            alert("tu total es " + final + " eso es un fallo critico");
            document.write("<br>" + "tu total es " + final + " eso es un fallo critico <br>");
            break;
        case final >= 2 && final <= 5:
            alert("tu total es " + final + " eso es un fallo mayor");
            document.write("<br>" + "tu total es " + final + " eso es un fallo mayor <br>");
            break;
        case final >= 6 && final <= 9:
            alert("tu total es " + final + " eso es un fallo");
            document.write("<br>" + "tu total es " + final + " eso es un fallo <br>");
            break;
        case final >= 10 && final <= 15:
            alert("tu total es " + final + " eso es una tirada pasable");
            document.write("<br>" + "tu total es " + final + " eso es una tirada pasable <br>");
            break;
        case final >= 16 && final <= 19:
            alert("tu total es " + final + " eso es un exito");
            document.write("<br>" + "tu total es " + final + " eso es un exito <br>");
            break;
        case final >= 20:
            alert("tu total es " + final + " eso es un exito critico!");
            document.write("<br>" + "tu total es " + final + " eso es un exito critico! <br>");
            break;
    }
}


//arregla el array de atributos usando los valores de mayor a manor
let statsorter = personaje.sort((a, b) => b.valor - a.valor);
document.write("estos son tus atributos ordenados de mayor a menor: <br>");
for (i=0;i<6;i++){
    document.write(" " + statsorter[i].atributo + " : " + statsorter[i].valor);
}
