let partidas = 0;
let puntos1 = 0;
let puntos2 = 0;
let totalDados1 = 12;
let totalDados2 = 12;
/*let dado = '<img src="../../img/evaluable/d1.png"'
let dado2 = '<img src="../../img/evaluable/d2.png"'
let dado3 = '<img src="../../img/evaluable/d3.png"'
let dado4 = '<img src="../../img/evaluable/d4.png"'
let dado5 = '<img src="../../img/evaluable/d5.png"'*/


function lanzar(){
    let dado1 = 0;
    let dado2 = 0;
    const partidasMAX = 3;
    let suma1 = 0;
    let suma2 = 0;




    let cantidadJ1 =document.getElementById("player1").value;
    let cantidadJ2 =document.getElementById("player2").value;

    //let dadosImg1 = document.getElementById("dados1");

    partidas++;

    if (partidas <= partidasMAX) {
        suma1 = 0;
        suma2 = 0;
            if (partidas == 1 && cantidadJ1 > 10 || cantidadJ2 > 10) {
            
                alert("No puedes tirar mas de 10 en tu primera partida");
            }else{
                    for (let j = 0; j < cantidadJ1; j++) {
                        dado1 = Math.floor((Math.random()*6)+1);
        
                        suma1 += dado1;
                        totalDados1 -= cantidadJ1;
                
                    }

                    for (let j = 0; j < cantidadJ2; j++) {
                        dado2 += Math.floor((Math.random()*6)+1);
        
                       switch(dado2){
                        case 1:
                            document.getElementById("dadosImg1").innerHTML = dado;
                        break;
                    }

                        suma2 += dado2;
                        totalDados2 -= cantidadJ2;

                    }
                        
                    if (suma1 > suma2) {
                        document.getElementById("partidas").innerHTML += suma1 + " ======== " + suma2 + "<br>";
                        puntos1++;
                    }else if(suma2 > suma1){
                        document.getElementById("partidas").innerHTML += suma1 + " ======== " + suma2 + "<br>";
                        puntos2++;
                    } 
        
            }
    }else{
        alert("Ya has acabado las tres partidas");
        console.log(puntos1 + " " + puntos2);
        if (puntos1 > puntos2) {
            document.getElementById("resultado").innerHTML += "JUGADOR 1 ES EL GANADOR: " + "<br>" + "PLAYER 1 -->" + puntos1 + " ======== " + "PLAYER 2 -->" + puntos2;
        }else if(puntos1 < puntos2){
            document.getElementById("resultado").innerHTML += "JUGADOR 2 ES EL GANADOR: " + "<br>" + puntos1 + " ======== " + puntos2;
        }
    }


}