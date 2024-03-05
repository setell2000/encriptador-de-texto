const botonEncriptar=document.getElementById('botonEncriptar');
const botonDesencriptar=document.getElementById('desencriptar');
const copiar=document.getElementById('copiar');

var encriptar;
var encriptarMin;
var desencriptar;

botonEncriptar.addEventListener('click', function(){
    
    encriptar=document.getElementById('areaIngresar').value;
    encriptarMin=encriptar.toLowerCase();

    encriptarMin=encriptarMin
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("a","ai")
    .replaceAll("o","ober")
    .replaceAll("u","ufat");

    marginArea.value=encriptarMin;


});
botonDesencriptar.addEventListener('click', function(){
    
    desencriptar=document.getElementById('areaIngresar').value;

    desencriptar=desencriptar
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ai","a")
    .replaceAll("ober","o")
    .replaceAll("ufat","u")

    marginArea.value=desencriptar;
})

copiar.addEventListener('click', function(){
    
        try {
            navigator.clipboard.writeText(document.getElementById('marginArea').value);
        } catch (error) {
            console.log('error al copiar');
        }
});




