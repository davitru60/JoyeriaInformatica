import { constantes } from './../utilities/constantes.js';
document.addEventListener("DOMContentLoaded", function () {
    sessionStorage.clear()
    const emailEntrada = document.getElementById("email")
    const contraEntrada = document.getElementById("contra")

    //Botones
    const btnLogin = document.getElementById("btn-login")
    const botonContra = document.getElementById("btn-contra")

    //Icono
    const ojoIcono = document.getElementById("eye-icon")


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

    async function iniciarSesion() {
        var email = emailEntrada.value
        var contrasena = contraEntrada.value
        var usuario = {
            email: email,
            contrasena: contrasena
        }

        const urlApi = constantes.urlApi
        try {
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

                sessionStorage.setItem('token', token)

                const headersConToken = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }

                window.location.href = 'html/inicio.html'
               
            } else {

                const alerta = document.createElement('div')
                alerta.classList.add('alert', 'alert-danger', 'mt-3');
                alerta.textContent = 'Credenciales incorrectas. Verifique su correo y contraseña.'

                const formulario = document.querySelector('form')

                // Insertar la alerta al principio del formulario
                formulario.insertBefore(alerta, formulario.firstChild)

                setTimeout(() => {
                    alerta.remove()
                }, 2000)
            }

        } catch (error) {

        }
    }

    btnLogin.addEventListener("click", async (event) => {
        event.preventDefault()
        await iniciarSesion()
    })

    botonContra.addEventListener("click", mostrarContrasena)

})
