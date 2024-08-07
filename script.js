// app.js
const botonEncriptar = document.querySelector('.encriptar');
const botonDesencriptar = document.querySelector('.desencriptar');
const botonCopiar = document.querySelector('.btn_copia');
const textoAEncriptar = document.querySelector('.texto__a_encriptar');
const mensaje = document.querySelector('.mensaje');

function btn_Encriptar() {
    const textoEncriptado = encriptar(textoAEncriptar.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    textoAEncriptar.value = ""; 
}

function encriptar(texto) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    texto = texto.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
    return texto;
}

function btn_Desencriptar() {
    const textoDesencriptado = desencriptar(mensaje.value);
    mensaje.value = textoDesencriptado;
    textoAEncriptar.value = ""; 
}

function desencriptar(textoD) {
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    textoD = textoD.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        textoD = textoD.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
    return textoD;
}

function btn_copiar() {
    mensaje.select();
    document.execCommand("copy");
    alert("Texto copiado");
}
