import { constantes } from './../utilities/constantes.js';
document.addEventListener("DOMContentLoaded", function () {

    const nombreEntrada = document.getElementById("nombre")
    const ap1Entrada = document.getElementById("ap1")
 /* These lines of code are selecting HTML elements by their IDs and assigning them to variables. */
    const ap2Entrada = document.getElementById("ap2")
    const emailEntrada = document.getElementById("email")
    const contraEntrada = document.getElementById("contra")
    const contraConfirmarEntrada = document.getElementById("contra-confirmar")
    const fotoEntrada = document.getElementById("foto")

    //Botones
    const registrarBtn = document.getElementById("btn")
    const botonContra = document.getElementById("btn-contra")
    const botonContraConfirmar = document.getElementById("btn-contra-confirmar")

    //Icono
    const ojoIcono = document.getElementById("eye-icon")
    const ojoIconoConfirmar = document.getElementById("eye-icon-confirmar")

    //Mensajes de error
    const mensajeErrorNombre = document.getElementById("mensajeNombre")
    const mensajeErrorAp1 = document.getElementById("mensajeAp1")
    const mensajeErrorAp2 = document.getElementById("mensajeAp2")
    const mensajeErrorEmail = document.getElementById("mensajeEmail")
    const mensajeErrorContrasena = document.getElementById("mensajeContrasena")
    const mensajeErrorContrasenaConf = document.getElementById("mensajeContrasenaConf")

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
        var ap1 = ap1Entrada.value
        var expresionRegular = constantes.cadenaApe

        if (!expresionRegular.test(ap1)) {
            ap1Entrada.classList.add("is-invalid")
            mensajeErrorAp1.textContent = "El apellido no es válido. Debe contener entre 2 y 20 caracteres"
        } else {
            ap1Entrada.classList.remove("is-invalid")
            ap1Entrada.classList.add("is-valid")
        }
    }

    function comprobarSegundoApellido(event) {
        event.preventDefault()
        var ap2 = ap2Entrada.value
        var expresionRegular = constantes.cadenaApe

        if (!expresionRegular.test(ap2)) {
            ap2Entrada.classList.add("is-invalid")
            mensajeErrorAp2.textContent = "El apellido no es válido. Debe contener entre 2 y 20 caracteres"
        } else {
            ap2Entrada.classList.remove("is-invalid")
            ap2Entrada.classList.add("is-valid")
        }
    }

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

    function comprobarConfirmarContrasena(event) {
        event.preventDefault()
        var contrasena = contraEntrada.value
        var confirmarContra = contraConfirmarEntrada.value

        if (contrasena != confirmarContra) {
            contraConfirmarEntrada.classList.add("is-invalid")
            mensajeErrorContrasenaConf.textContent = "Las contraseñas no coinciden."

        } else if (confirmarContra.trim() === "") {
            contraConfirmarEntrada.classList.add("is-invalid")
        } else {
            contraConfirmarEntrada.classList.remove("is-invalid")
            contraConfirmarEntrada.classList.add("is-valid")
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

    function mostrarContrasenaConfirmar() {
        if (contraConfirmarEntrada.type === "password") {
            contraConfirmarEntrada.type = "text"
            ojoIconoConfirmar.classList.remove("bi-eye-slash-fill")
            ojoIconoConfirmar.classList.add("bi-eye-fill")
        } else {
            contraConfirmarEntrada.type = "password";
            ojoIconoConfirmar.classList.remove("bi-eye-fill")
            ojoIconoConfirmar.classList.add("bi-eye-slash-fill")
        }
    }

    function obtenerValorImagen() {
        if (fotoEntrada.files.length > 0) {
            let archivo = foto.files[0].name
            return archivo
        }
    }

    function obtenerDatosUsuario() {
        var checkboxes = document.querySelectorAll('.form-check-input')
        var valoresCheckbox = ['Colaborador']

        checkboxes.forEach(function (checkbox) {
            if (checkbox.checked) {
                valoresCheckbox.push(checkbox.value)
            }
        })

        var foto = obtenerValorImagen()

        return {
            'nombre': nombreEntrada.value,
            'ape1': ap1Entrada.value,
            'ape2': ap2Entrada.value,
            'email': emailEntrada.value,
            'contrasena': contraConfirmarEntrada.value,
            'foto': foto,
            'roles': valoresCheckbox
        }
    }

    async function registrarUsuario() {
        const urlApi = constantes.urlApi
        var usuario = obtenerDatosUsuario()
        try {
            const respuesta = await fetch(urlApi + 'registrar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            })

            if(respuesta.ok){
                const datosRespuesta = await respuesta.json()
            }

        } catch (error) {

        }
    }

    registrarBtn.addEventListener("click", async() => {
        await registrarUsuario()
    }) 



    nombreEntrada.addEventListener("input", comprobarNombre)
    ap1Entrada.addEventListener("input", comprobarPrimerApellido)
    ap2Entrada.addEventListener("input", comprobarSegundoApellido)
    emailEntrada.addEventListener("input", comprobarEmail)
    contraEntrada.addEventListener("input", comprobarContrasena)
    contraConfirmarEntrada.addEventListener("input", comprobarConfirmarContrasena)

    botonContra.addEventListener("click", mostrarContrasena)
    botonContraConfirmar.addEventListener("click", mostrarContrasenaConfirmar)

})