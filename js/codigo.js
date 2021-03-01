var fondoSec1 = document.getElementById("sec_1");
var tituloSec1 = document.getElementById("tit");
var parrafoSec1 = document.getElementById("par");
var colorSec1 = document.getElementById("color_0");
var boton = document.getElementById("planes");
var cambiarTema = document.getElementById("tema");
var colorNosotros = document.getElementById("fondo_nos");
var i = 2;

function elegirTema() {
  if (i % 2 == 0) {
    fondoSec1.style.backgroundColor = "#242424";
    colorSec1.style.backgroundColor = "#242424";
    tituloSec1.style.color = "#ffffff";
    parrafoSec1.style.color = "#ffffff";
    cambiarTema.text = "Cambiar a tema claro";
    cambiarTema.style.backgroundColor = "#ffffff";
    cambiarTema.style.color = "black";
    i++;
  } else {
    fondoSec1.style.backgroundColor = "#ffffff";
    colorSec1.style.backgroundColor = "#ffffff";
    tituloSec1.style.color = "black";
    parrafoSec1.style.color = "black";
    cambiarTema.text = "Cambiar a tema oscuro";
    cambiarTema.style.backgroundColor = "black";
    cambiarTema.style.color = "#ffffff";
    i++;
  }
}

//SOMBRA NAV

$(window).scroll(function () {
  if ($(window).scrollTop() + $(window).height() <= $(document).height()) {
    //Al llegar al pie de la pagina se ejecuta
    $("header").css({ "box-shadow": "0px 2px 10px" });
  } else {
    $("header").css({ "box-shadow": "0px 0px 0px" });
  }
});

$(window).scroll(function () {
  if ($(this).scrollTop() == 0) {
    //Ejecutar función
    $("header").css({ "box-shadow": "0px 0px 0px" });
  }
});
