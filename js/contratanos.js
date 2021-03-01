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
function guardar() {
  var guardar = document.querySelector("#guardar");
  guardar.addEventListener("click", nuevaTarea);
  mostrarTareas();
}

function nuevaTarea() {
  var titulo = document.querySelector("#tit_tarea").value;
  var tarea = document.querySelector("#tarea").value;
  var urgencia = document.querySelector("#urgencia_tarea").value;
  var fecha = document.querySelector("#fecha_tarea").value;

  var datos = [tarea, urgencia, fecha];
  sessionStorage.setItem(titulo, datos);
 mostrarTareas2(); 
}

function mostrarTareas() {
  var caja = document.querySelector("#mostrarDatos");

  for (var i=0; i<sessionStorage.length; i++) {
    var id = sessionStorage.key(i);
    var valor = sessionStorage.getItem(id);

    caja.innerHTML += "<p id=\"pTareas\"> <span id=\"tituloTareas\">" +id+ '</span>-' + valor + ' <a id="cruzTareas" onclick = "borrarClase(\''+id+'\')"> <span class="icon-cross"></span> </a> </p>';
  }
  botonFinal()
  
}
function mostrarTareas2() {
  var caja = document.querySelector("#mostrarDatos");

  for (var i=0; i<sessionStorage.length; i++) {
    var id = sessionStorage.key(i);
    var valor = sessionStorage.getItem(id);

    caja.innerHTML += "<p id=\"pTareas\"> <span id=\"tituloTareas\">" +id+ '</span>-' + valor + ' <a id="cruzTareas" onclick = "borrarClase(\''+id+'\')"> <span class="icon-cross"></span> </a> </p>';
  }
  botonFinal()
  location.reload()
}

function borrarClase(id){
  sessionStorage.removeItem(id)
  location.reload()
  mostrarTareas()
}

function borrarTodo(){
  if(confirm("¿esta seguro de que desea borrar todo?"))
  {sessionStorage.clear()
  location.reload()
  mostrarTareas()}
}
function botonFinal(){
  if(sessionStorage.length < 1){
    document.querySelector("#enviarPedido").style.display = "none"
  }else{
    document.querySelector("#enviarPedido").style.display = "block"
  }
}
document.querySelector("#borrar").addEventListener("click", borrarTodo)
window.addEventListener("load", guardar);
window.addEventListener("load", botonFinal)