import { constantes } from './../utilities/constantes.js';
document.addEventListener("DOMContentLoaded", function () {

    const nombreEntrada = document.getElementById("nombre")
    const ap1Entrada = document.getElementById("ap1")
    const ap2Entrada = document.getElementById("ap2")
    const emailEntrada = document.getElementById("email")
    const contraEntrada = document.getElementById("contra")
    const registrarBtn = document.getElementById("btn")

    //Mensajes de error
    const mensajeErrorNombre = document.getElementById("mensajeNombre")
    const mensajeErrorAp1 = document.getElementById("mensajeAp1")
    const mensajeErrorAp2 = document.getElementById("mensajeAp2")
    const mensajeErrorCorreo = document.getElementById("mensajeCorreo")
    const mensajeErrorContrasena = document.getElementById("mensajeContrasena")

    function comprobarNombre(event) {
        event.preventDefault()
        var nombre = nombreEntrada.value
        var expresionRegular = constantes.cadenaNombre


        if (!expresionRegular.test(nombre)) {
            nombreEntrada.classList.add("is-invalid")
            mensajeErrorNombre.textContent = "El nombre es inválido. Debe contener entre 2 y 20 caracteres"
        } else {
            nombreEntrada.classList.remove("is-invalid")
            nombreEntrada.classList.add("is-valid")
        }

    }

    function comprobarPrimerApellido(event) {
        event.preventDefault()
        var ap1= ap1Entrada.value
        var expresionRegular = constantes.cadenaApe

        if(!expresionRegular.test(ap1)){
            ap1Entrada.classList.add("is-invalid")
            mensajeErrorAp1.textContent="El apellido no es válido. Debe contener entre 2 y 20 caracteres"
        }else{
            ap1Entrada.classList.remove("is-invalid")
            ap1Entrada.classList.add("is-valid")
        }
    }

    nombreEntrada.addEventListener("input", comprobarNombre)
    ap1Entrada.addEventListener("input", comprobarPrimerApellido)

    document.getElementById("btn").addEventListener("click", function () {
        var checkboxes = document.querySelectorAll('.form-check-input')
        var valoresCheckbox = []

        checkboxes.forEach(function (checkbox) {
            if (checkbox.checked) {
                valoresCheckbox.push(checkbox.value)
            }
        })
    })


   

})