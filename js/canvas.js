
function dibujo1(){
    var plano = document.querySelector("#canvas1")
    var elemento1 = plano.getContext("2d")

    elemento1.fillStyle = "#ffd88f"
    elemento1.fillRect(60, 50, 250, 350)

    elemento1.fillStyle = "#b8fdfe"
    elemento1.fillRect(70, 60, 70, 70)

    elemento1.fillStyle = "#b8fdfe"
    elemento1.fillRect(150, 60, 70, 70)

    elemento1.fillStyle = "#b8fdfe"
    elemento1.fillRect(230, 60, 70, 70)
/* 
    fila 2 */

    elemento1.fillStyle = "#b8fdfe"
    elemento1.fillRect(70, 140, 70, 70)

    elemento1.fillStyle = "#b8fdfe"
    elemento1.fillRect(150, 140, 70, 70)

    elemento1.fillStyle = "#b8fdfe"
    elemento1.fillRect(230, 140, 70, 70)

/* Fila 3 */
    elemento1.fillStyle = "#b8fdfe"
    elemento1.fillRect(70, 220, 70, 70)

    elemento1.fillStyle = "#b8fdfe"
    elemento1.fillRect(150, 220, 70, 70)

    elemento1.fillStyle = "#b8fdfe"
    elemento1.fillRect(230, 220, 70, 70)

    /* Puerta */
    elemento1.fillStyle = "#fa6543"
    elemento1.fillRect( 147.5, 330, 35, 70)

    elemento1.fillStyle = "#fa6543"
    elemento1.fillRect( 187.5, 330, 35, 70)

    /* Piso */
    elemento1.fillStyle = "black"
    elemento1.fillRect(10, 400, 500, 5)
/* 
#fffeb8
#fcad83 
#b8fdfe
#000000 */

}
window.addEventListener( "load", dibujo1)