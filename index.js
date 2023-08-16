function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let cubo = document.getElementById("cubo");

    // Implementación del cifrado César
    let desplazamiento = 3; // Número de posiciones a desplazar en el cifrado
    let textoCifrado = "";

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];

        if (char.match(/[a-z]/i)) {
            let code = texto.charCodeAt(i);
            if (char === char.toLowerCase()) {
                char = String.fromCharCode(((code - 97 + desplazamiento) % 26) + 97);
            } else {
                char = String.fromCharCode(((code - 65 + desplazamiento) % 26) + 65);
            }
        }

        textoCifrado += char;
    }
    
    document.getElementById("texto").value = textoCifrado;
    
    // Actualizar el contenido del mensaje encriptado
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    cubo.src = "img/cubo.png";
    
    // Mostrar alerta
    if (texto.length === 0) {
        cubo.src = "img/lab.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingrese el texto que desee encriptar";
        swal("Ooops!","Debes ingresar algún texto","warning");
    }
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let cubo = document.getElementById("cubo");

    // Implementación del descifrado César
    let desplazamiento = 3; // Número de posiciones a desplazar en el cifrado
    let textoDescifrado = "";

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];

        if (char.match(/[a-z]/i)) {
            let code = texto.charCodeAt(i);
            if (char === char.toLowerCase()) {
                char = String.fromCharCode(((code - 97 - desplazamiento + 26) % 26) + 97);
            } else {
                char = String.fromCharCode(((code - 65 - desplazamiento + 26) % 26) + 65);
            }
        }

        textoDescifrado += char;
    }

    document.getElementById("texto").value = textoDescifrado;
    
    // Actualizar el contenido del mensaje desencriptado
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    cubo.src = "img/cubo2.png";
    
    // Mostrar alerta
    if (texto.length === 0) {
        cubo.src = "img/lab.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingrese el texto que desee encriptar";
        swal("Ooops!","Debes ingresar algún texto","warning");
    }
}
