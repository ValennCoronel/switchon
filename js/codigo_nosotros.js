var cambiarTema = document.getElementById("tema");
var colorNosotros = document.getElementById("fondo_nos");
var titNosotros = document.getElementById("tit_nos");
var parNosotros = document.getElementById("par_nos");
var aNosotros = document.getElementById("a_nos");
var i = 2;

function elegirTema() {
  if (i % 2 == 0) {
    cambiarTema.text = "Cambiar a tema claro";
    cambiarTema.style.backgroundColor = "#ffffff";
    cambiarTema.style.color = "black";
    colorNosotros.style.backgroundColor = "#242424";
    titNosotros.style.color = "#ffffff";
    parNosotros.style.color = "#ffffff";
    aNosotros.style.color = "#ffffff";
    i++;
  } else {
    cambiarTema.text = "Cambiar a tema oscuro";
    cambiarTema.style.backgroundColor = "black";
    cambiarTema.style.color = "#ffffff";
    colorNosotros.style.backgroundColor = "#ffffff";
    titNosotros.style.color = "black";
    parNosotros.style.color = "black";
    aNosotros.style.color = "#013C99";
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
