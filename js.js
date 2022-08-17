var metro = document.getElementById('metro');
var centimetro = document.getElementById('cent');


metro.addEventListener('keyup', metroPCent);

function metroPCent() { 
    centimetro.value = Number(metro.value)*100;
}
centimetro.addEventListener('keyup', centPMetro);

function centPMetro() {
    metro.value = Number(centimetro.value)/100;
}