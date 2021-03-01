var fondoSec1 = document.getElementById("sec_1");
var tituloSec1 = document.getElementById("tit");
var parrafoSec1 = document.getElementById("par");
var colorSec1 = document.getElementById("color_0");
var formNombre = document.getElementById("nombre");
var formApellido = document.getElementById("apellido");
var formMail = document.getElementById("mail");
var formAsunto = document.getElementById("asunto");
var formMensaje = document.getElementById("mensaje");
var formCelular = document.getElementById("telefono");
var cambiarTema = document.getElementById("tema");
var secContacto = document.getElementById("sec_1_contacto");
var titContacto = document.getElementById("tit_contacto");
var formContacto = document.getElementById("form_contacto");
var parrafo = document.getElementById("p_contacto");
var titulo = document.getElementById("h1_contacto");
var subtitulo = document.getElementById("subtitulo");
var fondo = document.getElementById("cuerpo_contacto");
var label = document.querySelectorAll("label");
var borde = document.getElementById("sec_1_contacto")
var borde = document.getElementById("aviso")
var i = 2;
let a = 0

//CAMBIAR TEMA

function elegirTema() {
  if (i % 2 == 0) {
    cambiarTema.text = "Cambiar a tema claro";
    cambiarTema.style.backgroundColor = "#ffffff";
    cambiarTema.style.color = "black";
    secContacto.style.backgroundColor = "black";
    titContacto.style.backgroundColor = "black";
    formContacto.style.backgroundColor = "black";
    parrafo.style.color = "#ffffff";
    titulo.style.color = "#ffffff";
    subtitulo.style.color = "#ffffff";
    aviso.style.color = "#ffffff";
    fondo.style.backgroundColor = "black";
    borde.style.borderColor = "#ffffff"
    let a = 0
    while(a<= 5){
    label[a].style.color = "#ffffff";
    a++
    }
    i++;
  } else {
    cambiarTema.text = "Cambiar a tema oscuro";
    cambiarTema.style.backgroundColor = "black";
    cambiarTema.style.color = "#ffffff";
    secContacto.style.backgroundColor = "#ffffff";
    titContacto.style.backgroundColor = "#ffffff";
    formContacto.style.backgroundColor = "#ffffff";
    parrafo.style.color = "black";
    titulo.style.color = "black";
    subtitulo.style.color = "gray";
    aviso.style.color = "black";
    fondo.style.backgroundColor = "#ffffff";
    borde.style.borderColor = "black"
    let a = 0
    while(a<= 5){
      label[a].style.color = "black";
      a++
      }
    i++;
  }
}

//COMPLETAR FORMULARIO

var condicion = prompt("¿tenes un emprendimiento? contestar: si/no");

condicion = condicion.toLowerCase();

if (condicion == "si") {
  var usuario = [
    prompt("nombre"),
    prompt("apellido"),
    prompt("email"),
    prompt("nombre de tu emprendimiento"),
  ];
}

if (condicion == "no") {
  var usuario = [prompt("nombre"), prompt("apellido"), prompt("email")];
} else {
  validarFormulario();
  sombra();
}

formNombre.setAttribute("value", usuario[0]);
formApellido.setAttribute("value", usuario[1]);
formMail.setAttribute("value", usuario[2]);

if (condicion == "si") {
  formAsunto.setAttribute("value", "Consulta emprendimiento:" + usuario[3]);
}

//VALIDAR FORMULARIO

function validarFormulario() {
  formNombre.addEventListener("input", validarNombre);
  formApellido.addEventListener("input", validarApellido);
  formMail.addEventListener("input", validarMail);
  formAsunto.addEventListener("input", validarAsunto);
  formMensaje.addEventListener("input", validarMensaje);
  formCelular.addEventListener("input", validarCelular);
  validarNombre();
  validarApellido();
  validarMail();
  validarCelular();
  validarAsunto();
  validarMensaje();
}

function validarNombre() {
  if (formNombre.value == "") {
    formNombre.style.backgroundColor = "white";
    formNombre.setCustomValidity("ingresa tu nombre");
  } else {
    formNombre.style.backgroundColor = "";
    formNombre.setCustomValidity("");
  }
}

function validarApellido() {
  if (formApellido.value == "") {
    formApellido.style.backgroundColor = "white";
    formApellido.setCustomValidity("ingresa tu apellido");
  } else {
    formApellido.style.backgroundColor = "";
    formApellido.setCustomValidity("");
  }
}

function validarMail() {
  if (formMail.value == "") {
    formMail.style.backgroundColor = "white";
    formMail.setCustomValidity("ingresa tu correo electronico");
  } else {
    formMail.style.backgroundColor = "";
    formMail.setCustomValidity("");
  }
}

function validarAsunto() {
  if (formAsunto.value == "") {
    formAsunto.style.backgroundColor = "white";
    formAsunto.setCustomValidity("ingresa un asunto valido");
  } else {
    formAsunto.style.backgroundColor = "";
    formAsunto.setCustomValidity("");
  }
}
function validarCelular() {
  if (formCelular.value.lenght > 0) {
    formCelular.style.backgroundColor = "white";
    formCelular.setCustomValidity(
      "ingresa tu numero de telefono de 11 digitos"
    );
  } else {
    formCelular.style.backgroundColor = "";
    formCelular.setCustomValidity("");
  }
}
function validarMensaje() {
  if (formMensaje.value == "") {
    formMensaje.style.backgroundColor = "white";
    formMensaje.setCustomValidity(
      "ingresa un mensaje valido de 150 a 500 caracteres"
    );
  } else {
    formMensaje.style.backgroundColor = "";
    formMensaje.setCustomValidity("");
  }
}

window.addEventListener("load", validarFormulario);

//SOMBRA NAV

function sombra() {
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
}
