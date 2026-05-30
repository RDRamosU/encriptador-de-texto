document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('input-text');
    const btnEncriptar = document.getElementById('btnEncriptar');
    const btnDesencriptar = document.getElementById('btnDesencriptar');
    const outputContainer = document.getElementById('output-container');
    const outputText = document.getElementById('output-text');
    const btnCopiar = document.getElementById('btnCopiar');
    const placeholderImg = document.getElementById('placeholder-img');
    const placeholderText = document.getElementById('placeholder-text');

    // Funcion para encriptar el texto
    function encriptar(text) {
        return text
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    }

    // Funcion para desencriptar el texto
    function desencriptar(text) {
        return text
            .replace(/enter/g, 'e')
            .replace(/imes/g,  'i')
            .replace(/ai/g,    'a')
            .replace(/ober/g,  'o')
            .replace(/ufat/g,  'u');
    }

    // Activar el evento de encriptar
    btnEncriptar.addEventListener('click', () => {
        const text = inputText.value.trim();
        if (text) {
            outputText.value = encriptar(text);     // invoca la funcion desencriptar
            toggleOutputElements(true);             // muestra u oculta los elementos
        } else {
            toggleOutputElements(false);
        }
    });

    // Activar el evento de desencriptar desde el boton
    btnDesencriptar.addEventListener('click', () => {
        const text = inputText.value.trim();
        if (text) {
            outputText.value = desencriptar(text);  // invoca la funcion desencriptar
            toggleOutputElements(true);             // muestra u oculta los elementos
        } else {
            toggleOutputElements(false);
        }
    })

        // Mostrar u ocultar elementos segun se ha ingresado texto
        function toggleOutputElements(showOutput) {
            if (showOutput) {
                outputContainer.classList.add('hidden');    // Oculta el mensaje
                outputText.classList.remove('hidden');      // Muestra el textarea
                btnCopiar.classList.remove('hidden');       // Muestra el botón
            } else {
                outputContainer.classList.remove('hidden'); // Muestra el mensaje
                outputText.classList.add('hidden');         // Oculta el textarea
                btnCopiar.classList.add('hidden');          // Oculta el botón
            }
        }

    // Copiar el texto al portapapeles
    btnCopiar.addEventListener('click', async () => {
        // si el usuario no ha dado permiso para acceder al portapapeles o surge un error, lo capturamos y mostramos 
        try {
            await navigator.clipboard.writeText(outputText.value);  // metodo moderno para copiar texto al portapapeles
            inputText.focus();  // devuelve el foco al area de entrada
            alert('Se copio el texto exitosamente');

        } catch (error) {
            console.error('Error al copiar el texto: ', error);
            alert('No se pudo copiar el texto');
        }

    });

});