import { constantes } from './../utilities/constantes.js';
document.addEventListener("DOMContentLoaded", function () {
    const emailEntrada = document.getElementById("email")
    const contraEntrada = document.getElementById("contra")

    //Botones
    const btnLogin = document.getElementById("btn-login")
    const botonContra = document.getElementById("btn-contra")

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

    async function iniciarSesion(){
        var email = emailEntrada.value
        var contrasena = contraEntrada.value
        var usuario = {
            email: email,
            contrasena: contrasena
        }

        const urlApi = constantes.urlApi
        try{
            const respuesta = await fetch(urlApi + 'login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            })

            if (respuesta.ok) {
                const datos = await respuesta.json();
                const token = datos.token;

                localStorage.setItem('token', token)

                const headersConToken = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }

                window.location.href='html/inicio.html'

            } else {
            }

        }catch(error){

        }
    }

    btnLogin.addEventListener("click",async(event)=>{
        event.preventDefault()
        await iniciarSesion()
    })


    
    emailEntrada.addEventListener("input", comprobarEmail)
    contraEntrada.addEventListener("input", comprobarContrasena)
    botonContra.addEventListener("click", mostrarContrasena)

})
