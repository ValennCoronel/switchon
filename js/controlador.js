var play = document.getElementById("play");
var retroceder = document.getElementById("retroceder");
var adelantar = document.getElementById("adelantar");
var stop = document.getElementById("stop");
var publi = document.getElementById("publi");

function iniciar() {
  if (publi.paused) {
    publi.play();
    play.innerHTML = '<span class="icon-pause2"></span>';
  } else {
    publi.pause();
    play.innerHTML = '<span class="icon-play3"></span>';
  }
}

function detener() {
  publi.pause();
  publi.currentTime = 0;
  play.innerHTML = '<span class="icon-play3"></span>';
}
function saltar(valor) {
  publi.currentTime += valor;
}

stop.addEventListener("click", detener, false);
play.addEventListener("click", iniciar, false);

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
