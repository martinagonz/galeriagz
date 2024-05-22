document.addEventListener("DOMContentLoaded", function() {
    const formularioInicioSesion = document.querySelector("#form-inicio-sesion");
    const mensajeInicioSesion = document.querySelector("#mensaje-inicio-sesion");

    formularioInicioSesion.addEventListener("submit", function(event) {
        event.preventDefault();

        // Simulación de inicio de sesión exitoso
        mensajeInicioSesion.textContent = "¡Sesión iniciada!";
        setTimeout(function() {
            window.location.href = "obras.html"; // Redirecciona a obras.html después de 1 segundo
        }, 1000);
    });
});
