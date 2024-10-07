var temaClaro = "";
var temaEscuro = "";

function trocar(){
    document.getElementById("figura").src = temaClaro;
    let aux = temaClaro;
    temaClaro = temaEscuro;
    temaEscuro = aux;
}