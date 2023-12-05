const crearBarraLateral = () => {
    const wrapper = document.getElementById('wrapper')

    const barraLateral = `
      <div id="sidebar-wrapper">
          <div class="list-group list-group-flush my-3">
              <a href="#" class="list-group-item list-group-item-action bg-transparent second-text active"
                  data-bs-toggle="collapse" data-bs-target="#dashboardCollapse" aria-expanded="false">
                  <i class="fas fa-truck me-2"></i>Lotes
                  <i class="fas fa-chevron-down ms-auto"></i>
              </a>

              <div class="collapse" id="dashboardCollapse">
                  <a href="clasificacionLote.html" class="list-group-item list-group-item-action fw-bold">
                      <i class="fas fa-box me-2 ms-3"></i> Clasificar lotes
                  </a>
              </div>

              <a href="#" class="list-group-item list-group-item-action bg-transparent second-tex fw-bold"
                  data-bs-toggle="collapse" data-bs-target="#componentesCollapse" aria-expanded="false">
                  <i class="fas fa-cogs me-2"></i>Componentes
                  <i class="fas fa-chevron-down ms-auto"></i>
              </a>

              <div class="collapse" id="componentesCollapse">
                 <a href="clasificador.html" class="list-group-item list-group-item-action fw-bold" id="verComponenteBtn">
                    <i class="far fa-keyboard me-2 ms-3"></i> Ver lista de componentes
                 </a>

                  <a class="list-group-item list-group-item-action fw-bold" id="agregarComponenteBtn">
                      <i class="fas fa-wrench me-2 ms-3"></i> Agregar componente
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

    console.log(componenteObjeto)

    await agregarComponente(componenteObjeto)

    // Cerrar el modal si es necesario
    const modalElement = document.getElementById('agregarComponentesModal')
    const modal = new bootstrap.Modal(modalElement)
    modal.hide()
}

crearBarraLateral()
guardarComponente()
