import { constantes } from './../utilities/constantes.js';
document.addEventListener("DOMContentLoaded", function () {
    const rutaUsuario = constantes.urlApi + 'usuarios'
    rellenarConUsuario()

    
    async function rellenarConUsuario() {

        let rellenar = document.getElementById("rellenarTabla")
        let tabla = "" 
        const respuesta = await fetch(rutaUsuario, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const usuarios = await respuesta.json()

        const arrayUsuario = [usuarios]
        console.log(usuarios)
        for (let i = 0; i < usuarios.length; i++) {
            tabla = `
            <tr>
                <td>${arrayUsuario[i].foto}</td>
                <td>${arrayUsuario[i].nombre}</td>
                <td>${arrayUsuario[i].ape1}</td>
                <td>${arrayUsuario[i].ape2}</td>
                <td>${arrayUsuario[i].email}</td>
                <td>
                    <button class="btn btn-primary btn-sm" id="editar"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-danger btn-sm" id="borrar"><i class="fas fa-trash-alt"></i></button>
                </td>
            </tr>
            `
            let edit = document.getElementById("editar")
            edit.addEventListener('click',editar)
            let bor = document.getElementById("borrar")
            bor.addEventListener('click',borrar)
            let contenedor = document.getElementById("popupAbrir")
            let cerrar = document.getElementById("popupCerrar")
            
            bor.addEventListener('click', () => (
                contenedor.classList.add("show") //hay que crear un evento show y hay que ocultar el contenedor
            ))
            cerrar.addEventListener('click', () => (
                contenedor.classList.remove("show")
            ))

        }

        
    
    function editar(id_usuario) {
        async function bajarUsuario(){
            const respuesta = await fetch(rutaUsuario + id_usuario, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            })
            const usuarios = await respuesta.json()
        }
    }

    async function borrar(id_usuario){
        const respuesta = await fetch(rutaUsuario + id_usuario, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        })
        const usuarios = await respuesta.json()
    }

    rellenar.innerHTML = tabla
    }
})
