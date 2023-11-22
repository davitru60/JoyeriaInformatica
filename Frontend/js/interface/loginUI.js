import { constantes } from './../utilities/constantes.js';
document.addEventListener("DOMContentLoaded", function () {
    const emailEntrada = document.getElementById("email")
    const contraEntrada = document.getElementById("contra")

    //Botones
    const btnLogin = document.getElementById("btn-login")

    //Icono
    const ojoIcono = document.getElementById("eye-icon")

    //Mensajes de error
    const mensajeErrorEmail = document.getElementById("mensajeEmail")
    const mensajeErrorContrasena = document.getElementById("mensajeContrasena")

    function comprobarEmail(event) {
        event.preventDefault()
        var email = emailEntrada.value
        var expresionRegular = constantes.cadenaCorreo

        if (!expresionRegular.test(email)) {
            emailEntrada.classList.add("is-invalid")
            mensajeErrorEmail.textContent = "El correo es inválido. Antes del @ tener entre 2 y 15 caracteres teniendo minisculas, mayusculas y _"
        } else {
            emailEntrada.classList.remove("is-invalid")
            emailEntrada.classList.add("is-valid")
        }
    }

    function comprobarContrasena(event) {
        event.preventDefault()
        var contrasena = contraEntrada.value
        var expresionRegular = constantes.cadenaContrasena

        if (!expresionRegular.test(contrasena)) {
            contraEntrada.classList.add("is-invalid")
            mensajeErrorContrasena.textContent = "La contraseña es inválida. Debe tener entre 6 y 12 caracteres y contener solo letras, números, *, # o $"
        } else {
            contraEntrada.classList.remove("is-invalid")
            contraEntrada.classList.add("is-valid")
        }
    }

    
    function mostrarContrasena() {
        if (contraEntrada.type === "password") {
            contraEntrada.type = "text"
            ojoIcono.classList.remove("bi-eye-slash-fill")
            ojoIcono.classList.add("bi-eye-fill")
        } else {
            contraEntrada.type = "password";
            ojoIcono.classList.remove("bi-eye-fill")
            ojoIcono.classList.add("bi-eye-slash-fill")
        }
    }

    bt

})
