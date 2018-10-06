function idhtml(divid){
    return document.getElementById(divid).innerHTML
}

var player = 1; //definuje który gracz zaczyna 
//Nasłuchiwanie klikniec
var pola = document.getElementsByClassName("pole");

for (var i = 0; i < pola.length; i++) {
    'use strict';
    pola[i].addEventListener("click", zmiennik)
    pola[i].addEventListener("click", delzmiennik)
}
//glowna czesc aplikacji, zmianna gracz sprawdzanie warunków wygranej 
function zmiennik() {
    if (player == 1) {
        this.innerHTML = "X";
        player++;
        check("X");
    } else {
        this.innerHTML = "O";
        player--;
        check("O");
    }
}

function delzmiennik() {
    this.removeEventListener("click", zmiennik);
}
//mechanizm sprawdzania który gracz wygrał
function check(a) {
    if (idhtml('a') === a && idhtml('b') === a && idhtml('c') === a ||
        idhtml('a') === a && idhtml('d') === a && idhtml('g') === a ||
        idhtml('a') === a && idhtml('e') === a && idhtml('i') === a ||
        idhtml('c') === a && idhtml('f') === a && idhtml('i') === a ||
        idhtml('a') === a && idhtml('d') === a && idhtml('g') === a ||
        idhtml('d') === a && idhtml('e') === a && idhtml('f') === a ||
        idhtml('g') === a && idhtml('h') === a && idhtml('i') === a ||
        idhtml('b') === a && idhtml('e') === a && idhtml('h') === a ||
        idhtml('g') === a && idhtml('e') === a && idhtml('c') === a
    ) {document.getElementById('wynik').innerHTML = a + " wygrał!";
    }
}
