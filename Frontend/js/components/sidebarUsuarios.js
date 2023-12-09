const crearBarraLateral = () => {
    const wrapper = document.getElementById('wrapper')

    const barraLateral = `
      <div id="sidebar-wrapper">
          <div class="list-group list-group-flush my-3">
              
              <a href="#" class="list-group-item list-group-item-action bg-transparent second-tex fw-bold"
                  data-bs-toggle="collapse" data-bs-target="#usuariosCollapse" aria-expanded="false">
                  <i class="fas fa-user me-2"></i>Usuarios
                  <i class="fas fa-chevron-down ms-auto"></i>
              </a>

              <div class="collapse" id="usuariosCollapse">
                <a href="gestionUsuario.html" class="list-group-item list-group-item-action fw-bold" id="verComponenteBtn">
                     <i class="far fa-user me-2 ms-3"></i> Ver usuarios
                </a>
                  <a class="list-group-item list-group-item-action fw-bold" id="agregarUsuarioBtn">
                      <i class="fas fa-user-plus me-2 ms-3"></i> Agregar usuario
                  </a>
              </div>

              <a href="#" class="list-group-item list-group-item-action bg-transparent second-tex fw-bold"
                  data-bs-toggle="collapse" data-bs-target="#componentesCollapse" aria-expanded="false">
                  <i class="fas fa-cogs me-2"></i>Componentes
                  <i class="fas fa-chevron-down ms-auto"></i>
              </a>

              <div class="collapse" id="componentesCollapse">
                 <a href="componentesAdmin.html" class="list-group-item list-group-item-action fw-bold" id="verComponenteBtn">
                    <i class="far fa-keyboard me-2 ms-3"></i> Ver lista de componentes
                 </a>

                  <a class="list-group-item list-group-item-action fw-bold" id="agregarComponenteBtn">
                      <i class="fas fa-wrench-plus me-2 ms-3"></i> Agregar componente
                  </a>
              </div>
          </div>
      </div>`

    wrapper.innerHTML = barraLateral

    // Agregar evento al botón de "Agregar Componentes" dentro del componenteCollapse
    const agregarUsuarioBtn = document.getElementById('agregarUsuarioBtn')
    agregarUsuarioBtn.addEventListener('click', mostrarModalAgregarUsuarios)

    const agregarComponenteBtn = document.getElementById('agregarComponenteBtn')
    agregarComponenteBtn.addEventListener('click', mostrarModalAgregarComponentes)
}


const mostrarModalAgregarUsuarios = () => {
    // Crear el modal
    const modal = document.createElement('div')
    modal.classList.add('modal', 'fade')
    modal.id = 'agregarComponentesModal'
    modal.tabIndex = '-1'
    modal.setAttribute('aria-labelledby', 'agregarUsuariosModalLabel')
    modal.setAttribute('aria-hidden', 'true')

    // Contenido del modal (formulario)
    modal.innerHTML = `
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="agregarUsuariosModalLabel">Agregar usuario</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <form id="formularioAgregarUsuarios">
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
                  <button type="button" class="btn btn-primary"  data-bs-dismiss="modal" id="guardarUsuarioBtn">Guardar</button>
              </div>
          </div>
      </div>
  `

    // Agregar el modal al cuerpo del documento
    document.body.appendChild(modal)

    // Agregar evento al botón de "Guardar" del formulario
    const guardarUsuarioBtn = document.getElementById('guardarUsuarioBtn')
    guardarUsuarioBtn.addEventListener('click', guardarUsuario)


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

const guardarUsuario = async() => {

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

    const usuarioObjeto = {
        nombre : nombre,
        contrasena : contra,
        ape1 : primerApe,
        ape2 : segundoApe,
        email :correo,
        foto : 'url',
        roles : rolesAnadir
    }

    console.log(usuarioObjeto)

    await agregarUsuario(usuarioObjeto)

    // Cerrar el modal si es necesario
    const modalElement = document.getElementById('agregarUsuariosModal')
    const modal = new bootstrap.Modal(modalElement)
    modal.hide()
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
                          <label for="nombreComponente" class="form-label">Nombre del componente</label>
                          <input type="text" class="form-control" id="nombreComponente" required>
                      </div>
                      <div class="mb-3">
                          <label for="hwDropdown" class="form-label">Seleccionar si es de tipo hw</label>
                          <select class="form-select" id="hwDropdown" required>
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

async function agregarComponente(componente){
    try{
        const respuesta = await fetch('http://127.0.0.1:8000/api/componente', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(componente)
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

    const nombreComponente = document.getElementById('nombreComponente').value
    const hwDropdown = document.getElementById('hwDropdown').value

    const componenteObjeto = {
        nombre: nombreComponente,
        hw: hwDropdown
    }

    await agregarComponente(componenteObjeto)

    console.log('Nombre del Componente:', nombreComponente)
    console.log('Valor de HW:', hwDropdown)

    // Cerrar el modal si es necesario
    const modalElement = document.getElementById('agregarComponentesModal')
    const modal = new bootstrap.Modal(modalElement)
    modal.hide()
}

crearBarraLateral()
guardarUsuario()
guardarComponente()