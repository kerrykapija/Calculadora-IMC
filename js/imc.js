let btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", clickBtnCalcular);

function clickBtnCalcular(){
    let textopeso = document.getElementById("textopeso");
    let peso = textopeso.value;

    let textoaltura = document.getElementById("textoaltura");
    let altura = textoaltura.value;

    let imc = peso / (altura * altura);

    alert("El IMC es: " + Math.round(imc));
}
function mostrarImagen() {
    var imagen = document.getElementById("miImagen");
    imagen.classList.add("mostrar");}