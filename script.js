var player = 1; //definuje który gracz zaczyna 

//NOTKA DLA ADIEGO ZROBIONE WSZYSTKO OPROCZ FUNKCJI CHECK

//Nasłuchiwanie klikniec
var pola=document.getElementsByClassName("pole");
for (var i = 0; i < pola.length; i++) {
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

//function check(a) {
//
//    if (("#a").html() === a && $("#b").html() === a && $("#c").html() === a ||
//        ("#a").html() === a && $("#d").html() === a && $("#g").html() === a ||
//        ("#a").html() === a && $("#e").html() === a && $("#i").html() === a ||
//        ("#c").html() === a && $("#f").html() === a && $("#i").html() === a ||
//        ("#a").html() === a && $("#d").html() === a && $("#g").html() === a ||
//        ("#d").html() === a && $("#e").html() === a && $("#f").html() === a ||
//        ("#g").html() === a && $("#h").html() === a && $("#i").html() === a ||
//        ("#b").html() === a && $("#e").html() === a && $("#h").html() === a ||
//        ("#g").html() === a && $("#e").html() === a && $("#c").html() === a
//    ) {
//
//        alert(a + " " + "wygrał ");
//        console.log(pola);
//    }
//
//
//}
