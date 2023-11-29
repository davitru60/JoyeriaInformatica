import { mostrarUsuario,eliminarUsuario,cogerUnUsuario,editarUsuario,anadirUsuario } from '../api/adminAPI.js';
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
                `<button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#myModal${usu.id}"><i class="fas fa-edit"></i></button>`+
                `<button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteModal${usu.id}" ><i class="fas fa-trash-alt"></i></button>`
            ]).draw()   
 
            const editarUsuario= `
    <form class="modal" id="editarUsuario${usu.id}">
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
                    <input type="password" id="contra" name="contra" class="form-control" value=${usu.contrasena}>
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
            <button type="button" class="btn btn-primary mt-4" id="editarBtn${usu.id}">Editar usuario</button>
            </div>
        </div>
    </form>
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

            document.body.insertAdjacentHTML('beforeend',editarUsuario)
            editarUsuarioUI(usu.id)
            document.body.insertAdjacentHTML('beforeend',eliminarUsuario)
            eliminarUsuarioUI(usu.id)

            row.nodes().to$().data('usuarios',usu)
        });
        const anadirUsuario = `
    <form class="modal" id="anadirUsuario">
        <div class="row">
            <h3> Información básica</h3>
            <div class="col-sm-12 col-md-6 col-lg-6">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" id="nombre" name="nombre" class="form-control"
                    placeholder="Introduzca el nombre">
                <div class="invalid-feedback" id="mensajeNombre"></div>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-6">
                <label for="ap1" class="form-label">Primer apellido</label>
                <input type="text" id="ap1" name="ap1" class="form-control"
                    placeholder="Introduzca el primer apellido">
                <div class="invalid-feedback" id="mensajeAp1"></div>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-6">
                <label for="ap2" class="form-label">Segundo apellido</label>
                <input type="text" id="ap2" name="ap2" class="form-control"
                    placeholder="Introduzca el segundo apellido">
                <div class="invalid-feedback" id="mensajeAp2"></div>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-6">
                <label for="email" class="form-label">Email</label>
                <input type="text" id="email" name="email" class="form-control"
                    placeholder="Introduzca el email">
                <div class="invalid-feedback" id="mensajeEmail"></div>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-6">
                <label for="contra" class="form-label">Contraseña</label>
                <div class="input-group">
                    <input type="password" id="contra" name="contra" class="form-control"
                        placeholder="Introduzca la contraseña">
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
                <button type="button" class="btn btn-primary mt-4" id="AnadirBtn">Crear usuario</button>
            </div>
        </div>
    </form>
        `
        document.body.insertAdjacentHTML('beforeend',anadirUsuario)
        const anadir = document.getElementById('anadirUsuarioBtn')
        anadir.addEventListener('click',anadirUsuarioUI())
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
        const editar = document.getElementById(`editar${id}`);

        if (editar) {
            editar.addEventListener('click', async () => {
                try {
                    await cogerUnUsuario(id);

                    const modalElement = document.getElementById(`editarUsuario${id}`);
                    modalElement.addEventListener('click', async () =>{
                        try {

                            await editarUsuario(id)

                        } catch (error) {
                            
                            console.error('Error al confirmar la edición:', error);

                        }
                    })

                    const modal = new bootstrap.Modal(modalElement);
                    modal.hide();

                } catch (error) {
                    console.error('Error al confirmar la obtención del usuario:', error);
                }
            });
        }
    }
    async function anadirUsuarioUI() {
        const anadirBtn = document.getElementById(`AnadirBtn`);
        if (anadirBtn) {
            anadirBtn.addEventListener('click', async () => {
                try {
                    const nombre = document.getElementById('nombre')
                    const ape1 = document.getElementById('ap1')
                    const ape2 = document.getElementById('ap2')
                    const email = document.getElementById('email')
                    const contrasena = document.getElementById('password')
                    const foto = document.getElementById('foto')

                    const usuario = {
                        nombre : nombre,
                        ape1 : ape1,
                        ape2 : ape2,
                        correo : email,
                        contrasena : contrasena,
                        foto : foto
                    }
                    await anadirUsuario(usuario);

                    // Cierra el modal después de eliminar
                    const modalElement = document.getElementById(`anadirUsuario`);
                    const modal = new bootstrap.Modal(modalElement);
                    modal.hide();

                    

                } catch (error) {
                    console.error('Error al confirmar la eliminación:', error);
                }
            });
        }
    }
    rellenarConUsuario()
    
})
