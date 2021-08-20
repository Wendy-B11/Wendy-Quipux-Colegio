var puesto_actual;
var reservas;
var grupo_actual;
var gruporio;
var grupo;
window.onload = init;

function init()
{
	grupo = localStorage.getItem("grupo");
	document.getElementById("tittle").innerHTML=('Grado ' + grupo);
	nombre = localStorage.getItem("usuario");
	document.getElementById("saludo").innerHTML=('Profesor ' + nombre);
	//pintarCuadricula();
}