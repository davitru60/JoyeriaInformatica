/*async function agregarComponente(usuarioCreado){
    const rutaUsuario = 'http://127.0.0.1:8000/api/usuarios/';
    try {
    const respuesta = await fetch(rutaUsuario, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
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
}*/


/*const crearBarraLateral = () => {
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
                        <div class="mb-3">
                        <label for="nombre" class="form-label">Nombre</label>
                        <input type="text" id="nombre" name="nombre" value="Raul" class="form-control">
                        <div class="invalid-feedback" id="mensajeNombre">
                        </div>
                    </div>
  
                    <div class="mb-3">
                        <label for="ap1" class="form-label">Primer apellido</label>
                        <input type="text" id="ap1" name="ap1" class="form-control">
                        <div class="invalid-feedback" id="mensajeAp1"></div>
                    </div>
  
                    <div class="mb-3">
                        <label for="ap2" class="form-label">Segundo apellido</label>
                        <input type="text" id="ap2" name="ap2" class="form-control">
                        <div class="invalid-feedback" id="mensajeAp2"></div>
                    </div>
  
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="text" id="email" name="email" class="form-control">
                        <div class="invalid-feedback" id="mensajeEmail"></div>
                    </div>
  
                    <div class="mb-3">
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
    const foto = "url"

    const usuario = {
        nombre: nombre,
        contrasena: contrasena,
        ape1: ape1,
        ape2: ape2,
        email: email,
        foto: foto
    }
    console.log(usuario)
    await anadirUsuario(usuario)

    // Cerrar el modal si es necesario
    const modalElement = document.getElementById('agregarComponentesModal')
    const modal = new bootstrap.Modal(modalElement)
    modal.hide()
}

async function anadirUsuario(usuarioCreado){
    const rutaUsuario = 'http://127.0.0.1:8000/api/usuarios/';
    try {
    const respuesta = await fetch(rutaUsuario, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
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
crearBarraLateral()*/


const crearBarraLateral = () => {
    const wrapper = document.getElementById('wrapper')

    const barraLateral = `
      <div id="sidebar-wrapper">
          <div class="list-group list-group-flush my-3">
              
              <a href="#" class="list-group-item list-group-item-action bg-transparent second-tex fw-bold"
                  data-bs-toggle="collapse" data-bs-target="#componentesCollapse" aria-expanded="false">
                  <i class="fas fa-cogs me-2"></i>Administracion
                  <i class="fas fa-chevron-down ms-auto"></i>
              </a>

              <div class="collapse" id="componentesCollapse">
                  <a class="list-group-item list-group-item-action fw-bold" id="agregarComponenteBtn">
                      <i class="fas fa-wrench me-2 ms-3"></i> Agregar usuario
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
                      <div class="mb-3">
                          <label for="nombre" class="form-label">Nombre</label>
                          <input type="text" class="form-control" id="nombreUsuario" required>
                      </div>

                      <div class="mb-3">
                          <label for="ape1" class="form-label">Primer apellido</label>
                          <input type="text" class="form-control" id="ape1" required>
                      </div>

                      <div class="mb-3">
                          <label for="ape2" class="form-label">Segundo apellido</label>
                          <input type="text" class="form-control" id="ape2" required>
                      </div>

                      <div class="mb-3">
                          <label for="correo" class="form-label">Email</label>
                          <input type="text" class="form-control" id="correo" required>
                      </div>

                      <div class="mb-3">
                          <label for="contra" class="form-label">Contraseña</label>
                          <input type="password" class="form-control" id="contrasena" required>
                      </div>

                      <div class="mb-3">
                        <label for="hwDropdown" class="form-label">Administrador</label>
                        <select class="form-select" id="adminDropdown" required>
                            <option value="1">1</option>
                            <option value="0">0</option>
                        </select>
                      </div>
                    <div class="mb-3">
                        <label for="hwDropdown" class="form-label">Clasificador</label>
                        <select class="form-select" id="clasificadorDropdown" required>
                            <option value="1">1</option>
                            <option value="0">0</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="hwDropdown" class="form-label">Diseñador</label>
                        <select class="form-select" id="disenadorDropdown" required>
                            <option value="1">1</option>
                            <option value="0">0</option>
                        </select>
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

async function agregarUsuario(usuario){
    try{
        const respuesta = await fetch('http://127.0.0.1:8000/api/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        })

        if (respuesta.ok) {
            const datos = await respuesta.json()
            console.log(datos)
        }else{
            console.log('Algo fue mal')
        }
    }catch(error){
        
    }
}

const guardarComponente = async() => {

    const nombre = document.getElementById('nombreUsuario').value
    const primerApe = document.getElementById('ape1').value
    const segundoApe = document.getElementById('ape2').value
    const correo = document.getElementById('correo').value
    const contra = document.getElementById('contrasena').value
    const adminDropdown = document.getElementById('adminDropdown').value
    const clasificadorDropdown = document.getElementById('clasificadorDropdown').value
    const disenadorDropdown = document.getElementById('disenadorDropdown').value

    let rolesAnadir = ['Colaborador']
    if (adminDropdown==1) {
        rolesAnadir.push('Administrador')
    }
    if(clasificadorDropdown==1){
        rolesAnadir.push('Clasificador')
    }
    if(disenadorDropdown==1){
        rolesAnadir.push('Diseñador')
    }

    const componenteObjeto = {
        nombre : nombre,
        contrasena : contra,
        ape1 : primerApe,
        ape2 : segundoApe,
        email :correo,
        foto : 'url',
        roles : rolesAnadir
    }

    console.log(componenteObjeto)

    await agregarUsuario(componenteObjeto)

    // Cerrar el modal si es necesario
    const modalElement = document.getElementById('agregarComponentesModal')
    const modal = new bootstrap.Modal(modalElement)
    modal.hide()
}

crearBarraLateral()
guardarComponente()