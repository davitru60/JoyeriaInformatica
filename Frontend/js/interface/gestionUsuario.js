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
 
            const editarUsuario= `
            <form class="modal" id="editarUsuario${usu.id_usuario}">
        <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-6">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" id="nombre" name="nombre" class="form-control" value=${usu.nombre}>
                <div class="invalid-feedback" id="mensajeNombre"></div>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-6">
                <label for="ap1" class="form-label">Primer apellido</label>
                <input type="text" id="ap1" name="ap1" class="form-control" value=${usu.ape1}>
                <div class="invalid-feedback" id="mensajeAp1"></div>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-6">
                <label for="ap2" class="form-label">Segundo apellido</label>
                <input type="text" id="ap2" name="ap2" class="form-control" value=${usu.ape2}>
                <div class="invalid-feedback" id="mensajeAp2"></div>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-6">
                <label for="email" class="form-label">Email</label>
                <input type="text" id="email" name="email" class="form-control" value=${usu.email}>
                <div class="invalid-feedback" id="mensajeEmail"></div>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-6">
                <label for="contra" class="form-label">Contraseña</label>
                <div class="input-group">
                    <input type="password" id="contra" name="contra" class="form-control" value=${contrasena}>
                    <button type="button" class="btn btn-primary" id="btn-contra">
                        <i class="bi bi-eye-slash-fill" id="eye-icon"></i>
                    </button>
                    <div class="invalid-feedback" id="mensajeContrasena"></div>
                </div>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-6">
                <label for="foto" class="form-label">Foto</label>
                <input type="file" id="foto" name="foto" class="form-control">
            </div>

            <div class="row boton">
            <button type="button" class="btn btn-primary mt-4" id="editarUsuario${usu.id_usuario}">Editar usuario</button>
        </div>
        </div>
    </form>
            `
            const eliminarUsuario = `
            <div class="modal" id="deleteModal${usu.id_usuario}">
            <div class="modal-dialog modal-md">
                <div class="modal-content">
        
                    <div class="modal-header">
                        <h4 class="modal-title">Confirmar Eliminación</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
        
        
                    <div class="modal-body">
                        <p>¿Estás seguro de que deseas eliminar este lote?</p>
                    </div>
        
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" id="confirmarEliminacion${usu.id_usuario}">Confirmar Eliminación</button>
                    </div>
        
                </div>
            </div>
        </div>
            `
            document.body.insertAdjacentHTML('beforeend',editarUsuario)
            document.body.insertAdjacentHTML('beforeend',eliminarUsuario)

            row.nodes().to$().data('usuarios',usu)
        });
    }

    rellenarConUsuario()
})
