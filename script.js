const textoDeEntrada = document.querySelector('.texto__a_encriptar');
const mensaje = document.querySelector('.mensaje');

function btn_Encriptar() {
    const textoEncriptado = encriptar(textoDeEntrada.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    textoDeEntrada.value = ""; 
}

function encriptar(stringEncriptar) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"],["a", "ai"],["o", "ober"], ["u", "ufat"]];
    stringEncriptar = stringEncriptar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptar.includes(matrizCodigo[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
         }   
    }
    return stringEncriptar;
}

function btn_Desencriptar() {
    const textoEncriptado = desencriptar(textoDeEntrada.value);
    mensaje.value = textoEncriptado;
    textoDeEntrada.value = "";
   
}

function desencriptar(stringDesencriptar) {
    let matrizCodigo = [ ["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    stringDesencriptar = stringDesencriptar.toLowerCase()
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptar.includes(matrizCodigo[i][0])){
        stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringDesencriptar;
}
function btn_copiar() {
    mensaje.select();
    document.execCommand("copy");
    mensaje.value = ""
    alert("Texto copiado");
}
