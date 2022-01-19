var stat = 0;
var statscore = 0;
var modificador = 0;
var check = false;
var checkstat = false;
var dice = 0;
var final = 0;
atributo();
mod();

switch(stat){
    case "1":
        var statname = "Fuerza";
        dados(statname);
        tirada();
        break;
    case "2":
        var statname = "Destreza";
        dados(statname);
        tirada();
        break;
    case "3":
        var statname = "Constitucion";
        dados(statname);
        tirada();
        break;
    case "4":
        var statname = "Inteligencia";
        dados(statname);
        tirada();
        break;    
    case "5":
        var statname = "Sabiduria";
        dados(statname);
        tirada();
        break;
    case "6":
        var statname = "Carisma";
        dados(statname);
        tirada();
        break;
}
//funcion que toma el atributo a tirar y el valor del atributo
function atributo(){
    do {
        stat = prompt("Elige el numero de uno de los siguientes atributos: \n 1.Fuerza \n 2.Destreza \n 3.Constitucion \n 4.Inteligencia \n 5.Sabiduria \n 6.Carisma");
        chequeo(stat,1,6);
    } while (check == false);
    do {       
        statscore = prompt("Introduce el valor del atributo entre 6 y 18");
        checkstat = false;
        chequeo(statscore,6,18);
    } while (checkstat == false);
}

//funcion que chequea que la entrada del usuario este dentro de los parametros establecidos
function chequeo(entrada,bajo,alto){
    if (entrada>=bajo && entrada<=alto) {
        check = true;
        checkstat = true;
    } else {
        alert("Opcion invalida. Repetir proceso")
    }
}

//Funcion que asigna el modificador del stat dependiendo del valor asignado
function mod(){
    switch (true){
        case statscore>=6 && statscore<=9:
            modificador = -1;
            break;
        case statscore>=10 && statscore<=13:
            modificador = 0;
            break;
        case statscore>=14 && statscore<=17:
            modificador = 1;
            break;
        case statscore == 18:
            modificador = 2;
            break;
    }
}

//funcion de tirada de dado
function dados(atri){
    document.write("Tu " + atri + " es de "+ statscore + " tu modificador es " + modificador);
    check = false;
    do {
        dice = prompt("tira un dado de 20 caras y anota el resultado");
        chequeo(dice,1,20);

    } while (check == false);
    
}

//Funcion que determina el exito de la tirada
function tirada(){
    final = Number(dice) + Number(modificador);
    console.log(final);
    document.write("<br>" + "tu tirada es de: " + dice);
    switch (true){
        case final <= 1:
            document.write("<br>" + "tu total es " + final + " eso es un fallo critico");
            break;
        case final >= 2 && final <= 5:
            document.write("<br>" + "tu total es " + final + " eso es un fallo mayor");
            break;
        case final >= 6 && final <= 9:
            document.write("<br>" + "tu total es " + final + " eso es un fallo");
            break;
        case final >= 10 && final <= 15:
            document.write("<br>" + "tu total es " + final + " eso es una tirada pasable");
            break;
        case final >= 16 && final <= 19:
            document.write("<br>" + "tu total es " + final + " eso es un exito");
            break;
        case final >= 20:
            document.write("<br>" + "tu total es " + final + " eso es un exito critico!");
            break;
    }
}