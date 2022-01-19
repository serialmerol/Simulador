let check = false;
let checkstat = false;
let stat = 0;
const personaje = ["nombre", "raza", "clase",   str = {atributo: "Fuerza", valor: 0, modificador: 0},
                                                dex = {atributo: "Destreza", valor: 0, modificador: 0},
                                                con = {atributo: "Constitucion", valor: 0, modificador: 0},
                                                int = {atributo: "Inteligencia", valor: 0, modificador: 0},
                                                wis = {atributo: "Sabiduria", valor: 0, modificador: 0},
                                                car = {atributo: "Carisma", valor: 0, modificador: 0}]

for(i=3;i<9;i++){
    do {
        personaje[i].valor = prompt("Ingresa un valor entre 6 y 18 para tu " + personaje[i].atributo);
        chequeo(personaje[i].valor,6,18);
    } while (check == false);
    mod(personaje[i].valor);
}
document.write( personaje[3].atributo, " --- ", personaje[3].valor, " --- ", personaje[3].modificador, "<br>", personaje[4].atributo, " --- ", personaje[4].valor, " --- ", personaje[4].modificador, "<br>", 
                personaje[5].atributo, " --- ", personaje[5].valor, " --- ", personaje[5].modificador, "<br>", personaje[6].atributo, " --- ", personaje[6].valor, " --- ", personaje[6].modificador, "<br>",
                personaje[7].atributo, " --- ", personaje[7].valor, " --- ", personaje[7].modificador, "<br>", personaje[8].atributo, " --- ", personaje[8].valor, " --- ", personaje[8].modificador, "<br>");
// let statname;
// let statscore = 0;
// let modificador = 0;

// let dice = 0;
// let final = 0;
atributo();

// switch(stat){
//     case "1":
//         statname = "Fuerza";
//         dados(statname);
//         tirada();
//         break;
//     case "2":
//         statname = "Destreza";
//         dados(statname);
//         tirada();
//         break;
//     case "3":
//         statname = "Constitucion";
//         dados(statname);
//         tirada();
//         break;
//     case "4":
//         statname = "Inteligencia";
//         dados(statname);
//         tirada();
//         break;    
//     case "5":
//         statname = "Sabiduria";
//         dados(statname);
//         tirada();
//         break;
//     case "6":
//         statname = "Carisma";
//         dados(statname);
//         tirada();
//         break;
// }
// //funcion que toma el atributo a tirar y el valor del atributo
function atributo(){
    do {
        stat = prompt("Elige el numero de uno de los siguientes atributos: \n 1.Fuerza \n 2.Destreza \n 3.Constitucion \n 4.Inteligencia \n 5.Sabiduria \n 6.Carisma");
        chequeo(stat,1,6);
        stat = Number(stat)+2;
        console.log(stat);
    } while (check == false);
}

// //funcion que chequea que la entrada del usuario este dentro de los parametros establecidos
function chequeo(entrada,bajo,alto){
    check = false;
    checkstat = false;
    if (entrada>=bajo && entrada<=alto) {
        check = true;
        checkstat = true;
    } else {
        alert("Opcion invalida. Repetir proceso")
    }
}

// //Funcion que asigna el modificador del stat dependiendo del valor asignado
function mod(statscore){
    switch (true){
        case statscore>=6 && statscore<=9:
            return -1;
            break;
        case statscore>=10 && statscore<=13:
            return 0;
            break;
        case statscore>=14 && statscore<=17:
            return 1;
            break;
        case statscore == 18:
            return 2;
            break;
    }
}

// //funcion de tirada de dado
// function dados(atri){
//     document.write("Tu " + atri + " es de "+ statscore + " tu modificador es " + modificador);
//     check = false;
//     do {
//         dice = prompt("tira un dado de 20 caras y anota el resultado");
//         chequeo(dice,1,20);

//     } while (check == false);
    
// }

// //Funcion que determina el exito de la tirada
// function tirada(){
//     final = Number(dice) + Number(modificador);
//     console.log(final);
//     document.write("<br>" + "tu tirada es de: " + dice);
//     switch (true){
//         case final <= 1:
//             document.write("<br>" + "tu total es " + final + " eso es un fallo critico");
//             break;
//         case final >= 2 && final <= 5:
//             document.write("<br>" + "tu total es " + final + " eso es un fallo mayor");
//             break;
//         case final >= 6 && final <= 9:
//             document.write("<br>" + "tu total es " + final + " eso es un fallo");
//             break;
//         case final >= 10 && final <= 15:
//             document.write("<br>" + "tu total es " + final + " eso es una tirada pasable");
//             break;
//         case final >= 16 && final <= 19:
//             document.write("<br>" + "tu total es " + final + " eso es un exito");
//             break;
//         case final >= 20:
//             document.write("<br>" + "tu total es " + final + " eso es un exito critico!");
//             break;
//     }
// }