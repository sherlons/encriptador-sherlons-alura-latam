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
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    texto = texto.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (texto.includes(matrizCodigo[i][0])) {
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return texto;
}

function btn_Desencriptar() {
    const textoDesencriptado = desencriptar(textoAEncriptar.value);
    mensaje.value = textoDesencriptado;
    textoAEncriptar.value = ""; 
}

function desencriptar(texto) {
    let matrizCodigo = [["ai", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]];
    texto = texto.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (texto.includes(matrizCodigo[i][0])) {
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return texto;
}

function btn_copiar() {
    mensaje.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
