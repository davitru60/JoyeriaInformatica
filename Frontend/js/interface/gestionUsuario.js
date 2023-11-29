import { mostrarUsuario, eliminarUsuario, cogerUnUsuario, editarUsuario, anadirUsuario } from '../api/adminAPI.js';
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
                `<button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#myModal${usu.id}"><i class="fas fa-edit"></i></button>` +
                `<button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteModal${usu.id}" ><i class="fas fa-trash-alt"></i></button>`
            ]).draw()

            const editarUsuario = `
<div class="modal" id="myModal${usu.id}">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Editar usuario ${usu.nombre}</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-6">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" id="nombre" name="nombre${usu.id}" class="form-control" value=${usu.nombre}>
                    <div class="invalid-feedback" id="mensajeNombre"></div>
                </div>

                <div class="col-sm-12 col-md-6 col-lg-6">
                    <label for="ap1" class="form-label">Primer apellido</label>
                    <input type="text" id="ap1" name="ap1${usu.id}" class="form-control" value=${usu.ape1}>
                    <div class="invalid-feedback" id="mensajeAp1"></div>
                </div>

                <div class="col-sm-12 col-md-6 col-lg-6">
                    <label for="ap2" class="form-label">Segundo apellido</label>
                    <input type="text" id="ap2" name="ap2${usu.id}" class="form-control" value=${usu.ape2}>
                    <div class="invalid-feedback" id="mensajeAp2"></div>
                </div>

                <div class="col-sm-12 col-md-6 col-lg-6">
                    <label for="email" class="form-label">Email</label>
                    <input type="text" id="email" name="email${usu.id}" class="form-control" value=${usu.email}>
                    <div class="invalid-feedback" id="mensajeEmail"></div>
                </div>

                <div class="col-sm-12 col-md-6 col-lg-6">
                    <label for="contra" class="form-label">Contraseña</label>
                    <div class="input-group">
                        <input type="password" id="contra" name="contra${usu.id}" class="form-control" value=${usu.contrasena}>
                        <button type="button" class="btn btn-primary" id="btn-contra">
                        <i class="bi bi-eye-slash-fill" id="eye-icon"></i>
                        </button>
                    <div class="invalid-feedback" id="mensajeContrasena"></div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal" id="editarBtn${usu.id}">Editar usuario</button>
            </div>
        </div>                
    </div>
</div>
            `
            const eliminarUsuario = `
        <div class="modal" id="deleteModal${usu.id}">
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
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" id="confirmarEliminacion${usu.id}">Confirmar Eliminación</button>
                    </div>
        
                </div>
            </div>
        </div>
            `

            document.body.insertAdjacentHTML('beforeend', editarUsuario)
            editarUsuarioUI(usu.id)
            document.body.insertAdjacentHTML('beforeend', eliminarUsuario)
            eliminarUsuarioUI(usu.id)

            row.nodes().to$().data('usuarios', usu)
        });
        document.body.insertAdjacentHTML('beforeend', anadirUsuario)
        anadirUsuarioUI()

        const agregarUsuario = document.getElementById('anadirModalUsu')
        agregarUsuario.addEventListener('click',anadirUsuarioBtn)

    }
    async function eliminarUsuarioUI(id) {
        const confirmarEliminacion = document.getElementById(`confirmarEliminacion${id}`);

        if (confirmarEliminacion) {
            confirmarEliminacion.addEventListener('click', async () => {
                try {
                    await eliminarUsuario(id);

                    // Cierra el modal después de eliminar
                    const modalElement = document.getElementById(`deleteModal${id}`);
                    const modal = new bootstrap.Modal(modalElement);
                    modal.hide();



                } catch (error) {
                    console.error('Error al confirmar la eliminación:', error);
                }
            });
        }
    }
    async function editarUsuarioUI(id) {
        const modificarBtn = document.getElementById(`editarBtn${id}`);

        if (modificarBtn) {

            modificarBtn.addEventListener('click', async () => {
                try {

                    // Obtener las referencias a los campos de texto dentro del modal específico
                    const modalElement = document.getElementById(`myModal${id}`)
                    const nombreUsu = modalElement.querySelector(`#nombre`).value
                    const ape1Usu = modalElement.querySelector(`#ap1`).value
                    const ape2Usu = modalElement.querySelector(`#ap2`).value
                    const emailUsu = modalElement.querySelector(`#email`).value
                    const contraUsu = modalElement.querySelector(`#contra`).value

                    const usuarioObjeto = {
                        nombre: nombreUsu,
                        ape1: ape1Usu,
                        ape2: ape2Usu,
                        email: emailUsu,
                        contrasena: contraUsu,
                    }
                    console.log(usuarioObjeto)
                    await editarUsuario(id, usuarioObjeto)

                    // Cerrar el modal después de modificar
                    const modal = new bootstrap.Modal(modalElement)
                    modal.hide();
                } catch (error) {
                    console.error('Error al confirmar la modificación:', error)
                }
            });
        }
    }
    async function anadirUsuarioUI() {
        const anadirBtn = document.getElementById(`anadirBtn`);
        if (anadirBtn) {
            anadirBtn.addEventListener('click', async () => {
                try {
                    const modalElement = document.getElementById(`anadirModal`);
                    const nombre = document.getElementById('nombre').value
                    const ape1 = document.getElementById('ap1').value
                    const ape2 = document.getElementById('ap2').value
                    const email = document.getElementById('email').value
                    const contrasena = document.getElementById('password').value

                    const usuario = {
                        nombre: nombre,
                        ape1: ape1,
                        ape2: ape2,
                        correo: email,
                        contrasena: contrasena,
                        foto: foto
                    }
                    await anadirUsuario(usuario);

                    // Cierra el modal después de eliminar

                    const modal = new bootstrap.Modal(modalElement);
                    modal.hide();



                } catch (error) {
                    console.error('Error al confirmar la eliminación:', error);
                }
            });
        }
    }
    rellenarConUsuario()
    function anadirUsuarioBtn(){
        const modal = document.createElement('div')
        modal.classList.add('modal', 'fade')
        modal.id = 'anadirModalUsu'
        modal.tabIndex = '-1'
        modal.setAttribute('aria-labelledby', 'agregarComponentesModalLabel')
        modal.setAttribute('aria-hidden', 'true')
        modal.innerHTML = `
        <div class="modal" id="anadirUsuario">
            <div class="modal-dialog modal-md">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Editar nuevo usuario</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                        <div class="col-sm-12 col-md-6 col-lg-6">
                            <label for="nombre" class="form-label">Nombre</label>
                            <input type="text" id="nombre" name="nombre" class="form-control">
                            <div class="invalid-feedback" id="mensajeNombre"></div>
                        </div>
        
                        <div class="col-sm-12 col-md-6 col-lg-6">
                            <label for="ap1" class="form-label">Primer apellido</label>
                            <input type="text" id="ap1" name="ap1" class="form-control">
                            <div class="invalid-feedback" id="mensajeAp1"></div>
                        </div>
        
                        <div class="col-sm-12 col-md-6 col-lg-6">
                            <label for="ap2" class="form-label">Segundo apellido</label>
                            <input type="text" id="ap2" name="ap2" class="form-control">
                            <div class="invalid-feedback" id="mensajeAp2"></div>
                        </div>
        
                        <div class="col-sm-12 col-md-6 col-lg-6">
                            <label for="email" class="form-label">Email</label>
                            <input type="text" id="email" name="email" class="form-control">
                            <div class="invalid-feedback" id="mensajeEmail"></div>
                        </div>
        
                        <div class="col-sm-12 col-md-6 col-lg-6">
                            <label for="contra" class="form-label">Contraseña</label>
                            <div class="input-group">
                                <input type="password" id="contra" name="contra" class="form-control">
                                <button type="button" class="btn btn-primary" id="btn-contra">
                                <i class="bi bi-eye-slash-fill" id="eye-icon"></i>
                                </button>
                            <div class="invalid-feedback" id="mensajeContrasena"></div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" id="anadirBtn">Crear usuario</button>
                    </div>
                </div>                
            </div>
        </div>
                    `
    }
})
