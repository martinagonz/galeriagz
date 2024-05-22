document.addEventListener("DOMContentLoaded", function() {
    const registroForm = document.querySelector("#form-registro");
    const mensajeRegistro = document.querySelector("#mensaje-registro");

    registroForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Aquí podrías agregar la lógica para procesar el registro
        // Por ahora, simplemente muestra un mensaje de registro exitoso
        mensajeRegistro.textContent = "¡Registro exitoso!";
        setTimeout(function() {
            window.location.href = "index.html";
        }, 2000); // Redirigir después de 2 segundos (2000 milisegundos)
    });
});
