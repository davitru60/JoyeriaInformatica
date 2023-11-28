import { mostrarUsuario,eliminarUsuario,cogerUnUsuario } from '../api/adminAPI.js';
document.addEventListener("DOMContentLoaded", function () {
    
    
    async function rellenarConUsuario() {
        const usuarios = await mostrarUsuario()
        console.log(usuarios)
        const tabla = $('#usuarios').DataTable()
        tabla.clear().draw()
        usuarios.forEach(usu => {
            const row = tabla.row.add([
                usu.foto,
                usu.nombre,
                usu.ape1,
                usu.ape2,
                usu.email,
                `<button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#myModal${usu.id_usuario}"><i class="fas fa-edit"></i></button>`+
                `<button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteModal${usu.id_usuario}" ><i class="fas fa-trash-alt"></i></button>`
            ]).draw()   
 

            /*tabla = `
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
            `*/
            /*let edit = document.getElementById("editar")
            edit.addEventListener('click',editar)
            let bor = document.getElementById("borrar")
            bor.addEventListener('click',borrar)
            let contenedor = document.getElementById("popupAbrir")
            let cerrar = document.getElementById("popupCerrar")*/

            row.nodes().to$().data('usuarios',usu)
        });
    }

    rellenarConUsuario()
})
