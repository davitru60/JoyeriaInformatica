document.addEventListener("DOMContentLoaded", function (){
    async function bajarUsuario(){
        let id_usuario = localStorage.getItem("id_usuario")
        const respuesta = await fetch(rutaUsuario + id_usuario, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        })
        const usuarios = await respuesta.json()
    }
})