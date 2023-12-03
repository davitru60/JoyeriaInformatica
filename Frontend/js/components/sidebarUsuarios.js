const crearBarraLateral = () => {
    const wrapper = document.getElementById('wrapper')

    const barraLateral = `
      <div id="sidebar-wrapper">
          <div class="list-group list-group-flush my-3">
              <a href="#" class="list-group-item list-group-item-action bg-transparent second-tex fw-bold"
                  data-bs-toggle="collapse" data-bs-target="#componentesCollapse" aria-expanded="false">
                  <i class="fas fa-cogs me-2"></i>Administración
                  <i class="fas fa-chevron-down ms-auto"></i>
              </a>

              <div class="collapse" id="componentesCollapse">
                 <a href="componentesAdmin.html" class="list-group-item list-group-item-action fw-bold" id="verComponenteBtn">
                    <i class="far fa-keyboard me-2 ms-3"></i> Ver componentes
                 </a>

                  <a class="list-group-item list-group-item-action fw-bold" id="agregarComponenteBtn">
                      <i class="fas fa-wrench me-2 ms-3"></i> Agregar Usuarios
                  </a>

                  
              </div>
          </div>
      </div>`

    wrapper.innerHTML = barraLateral

    // Agregar evento al botón de "Agregar Componentes" dentro del componenteCollapse
    const agregarComponenteBtn = document.getElementById('agregarComponenteBtn')
    agregarComponenteBtn.addEventListener('click', mostrarModalAgregarComponentes)
}

const mostrarModalAgregarComponentes = () => {
    // Crear el modal
    const modal = document.createElement('div')
    modal.classList.add('modal', 'fade')
    modal.id = 'agregarComponentesModal'
    modal.tabIndex = '-1'
    modal.setAttribute('aria-labelledby', 'agregarComponentesModalLabel')
    modal.setAttribute('aria-hidden', 'true')

    // Contenido del modal (formulario)
    modal.innerHTML = `
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="agregarComponentesModalLabel">Agregar componente</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form id="formularioAgregarComponentes">
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
                </form>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-primary"  data-bs-dismiss="modal" id="guardarComponenteBtn">Guardar</button>
              </div>
          </div>
      </div>
  `

    // Agregar el modal al cuerpo del documento
    document.body.appendChild(modal)

    // Agregar evento al botón de "Guardar" del formulario
    const guardarComponenteBtn = document.getElementById('guardarComponenteBtn')
    guardarComponenteBtn.addEventListener('click', guardarComponente)

    // Mostrar el modal
    const modalInstance = new bootstrap.Modal(modal)
    modalInstance.show()
}


const guardarComponente = async() => {

    const nombre = document.getElementById('nombre').value
    const ape1 = document.getElementById('ap1').value
    const ape2 = document.getElementById('ap2').value
    const email = document.getElementById('email').value
    const contrasena = document.getElementById('contra').value

    const usuario = {
        nombre: nombre,
        ape1: ape1,
        ape2: ape2,
        correo: email,
        contrasena: contrasena,
        foto: "url"
    }

    await anadirUsuario(usuario)

    // Cerrar el modal si es necesario
    const modalElement = document.getElementById('agregarComponentesModal')
    const modal = new bootstrap.Modal(modalElement)
    modal.hide()
}

async function anadirUsuario(usuarioCreado){
    const rutaUsuario = constantes.urlApi + 'usuarios/';
    try {
    const respuesta = await fetch(rutaUsuario, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(usuarioCreado),
    })
    if (!respuesta.ok) {

        throw new Error(`Error al eliminar el usuario. Código de estado: ${respuesta.status}`);
    }
    const resultado = await respuesta.json();
    return resultado;
    }catch (error){
        console.error('Error en la función eliminarUsuario:', error.message);

        throw error;
    }
}
crearBarraLateral()
guardarComponente()