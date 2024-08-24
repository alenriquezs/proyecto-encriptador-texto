let btnLimpiar = document.querySelector('#btn-limpiar');
let btnEncriptar = document.querySelector('#btn-encriptar');
let btnDesencriptar = document.querySelector('#btn-desencriptar');
let btnCopiar = document.querySelector('#btn-copiar');
let inputTexto = document.querySelector('#txt-ingresado');
let textoEncriptado = document.querySelector('#txt-resultado');

let listaReglas = [['a', 'ai'], ['e', 'enter'], ['i', 'imes'], ['o', 'ober'], ['u', 'ufat']];

function validarTexto (texto) {
    if (texto == "") {
        alert('No hay texto para encriptar');
        return false;
    } else if(texto != texto.toLowerCase()) {
        alert('El texto debe contener solo letras minúsculas');
        inputTexto.value = "";
        textoEncriptado.value = "";
        return false
    } else if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(texto)) {
        alert('El texto no debe contener caracteres especiales');
        inputTexto.value = "";
        textoEncriptado.value = "";
        return false;
    } else if (/\d/.test(texto)) {
        alert('El texto no debe contener números');
        inputTexto.value = "";
        textoEncriptado.value = "";
        return false;
    } else if ( /[áéíóú]/.test(texto) ) {
        alert('El texto no debe contener letras con acentos');
        inputTexto.value = "";
        textoEncriptado.value = "";
        return false;
    } else {
        return true;
    }
}

btnEncriptar.addEventListener('click', () => {
    // Si existe valor en texto-ingresado
    let texto = inputTexto.value;
    if (validarTexto(texto)) {
        let msgEncriptado = ""
        for (let i=0; i < texto.length; i++) {
            let letra = texto.charAt(i)
            let letraEncriptada = letra
            for (let j=0; j < listaReglas.length; j++) {
                if (letra == listaReglas[j][0]) {
                    letraEncriptada = listaReglas[j][1]
                    break
                }
            }
            msgEncriptado += letraEncriptada
        }
        textoEncriptado.value = msgEncriptado
    }
})

btnDesencriptar.addEventListener('click', () => {
    let texto = inputTexto.value;
    if (texto != "") {
        let msgDesencriptado = ""
        for (let i=0; i < listaReglas.length; i++) {
            msgDesencriptado = texto.replaceAll(listaReglas[i][1], listaReglas[i][0]);
            texto = msgDesencriptado
        }
        textoEncriptado.value = msgDesencriptado
    } else {
        alert('No hay texto para desencriptar');
        return;
    }            
})

btnCopiar.addEventListener('click', () => {
    textoEncriptado.select();
    navigator.clipboard.writeText(textoEncriptado.value);
})

btnLimpiar.addEventListener('click', () => {
    inputTexto.value = "";
    textoEncriptado.value = "";
})