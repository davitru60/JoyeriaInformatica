const crearBarraLateral = () => {
    const wrapper = document.getElementById('wrapper')
  
    const barraLateral = `
      <div id="sidebar-wrapper">
      <div class="list-group list-group-flush my-3">
          <a href="#" class="list-group-item list-group-item-action bg-transparent second-text active"
              data-bs-toggle="collapse" data-bs-target="#dashboardCollapse" aria-expanded="false">
              <i class="fas fa-drafting-compass me-2"></i>Fabricación
              <i class="fas fa-chevron-down ms-auto"></i>
          </a>
          <div class="collapse" id="dashboardCollapse">
              <a href="disenador.html" class="list-group-item list-group-item-action fw-bold">
                  <i class="fas fa-gem me-2 ms-3"></i> Fabricar joya
              </a>
          </div>

          <a href="#" class="list-group-item list-group-item-action bg-transparent second-text active"
              data-bs-toggle="collapse" data-bs-target="#joyasCollapse" aria-expanded="false">
              <i class="fas fa-ring me-2"></i>Joyas
              <i class="fas fa-chevron-down ms-auto"></i>
          </a>
          <div class="collapse" id="joyasCollapse">
              <a href="joyas.html" class="list-group-item list-group-item-action fw-bold">
                  <i class="fas fa-th-list me-2 ms-3"></i> Ver lista de joyas
              </a>
          </div>

          <a href="#" class="list-group-item list-group-item-action bg-transparent second-text active"
              data-bs-toggle="collapse" data-bs-target="#recetasCollapse" aria-expanded="false">
              <i class="fas fa-clipboard-list me-2"></i>Recetas
              <i class="fas fa-chevron-down ms-auto"></i>
          </a>

          <div class="collapse" id="recetasCollapse">
              <a href="recetas.html" class="list-group-item list-group-item-action fw-bold">
                  <i class="fas fa-stream me-2 ms-3"></i> Ver lista de recetas
              </a>
              
              <a class="list-group-item list-group-item-action fw-bold" id="agregarRecetaBtn">
                  <i class="fas fa-plus me-2 ms-3"></i> Agregar receta    
              </a>

          </div>

          <a href="#" class="list-group-item list-group-item-action bg-transparent second-text active"
          data-bs-toggle="collapse" data-bs-target="#ingredientesCollapse" aria-expanded="false">
          <i class="fas fa-list-alt me-2"></i>Ingredientes
          <i class="fas fa-chevron-down ms-auto"></i>
      </a>

      <div class="collapse" id="ingredientesCollapse">
          <a href="ingredientes.html" class="list-group-item list-group-item-action fw-bold">
              <i class="fab fa-sistrix me-2 ms-3"></i> Ver lista de ingredientes
          </a>
      </div>
      </div>

      <div class="list-group list-group-flush">
          
      </div>
  </div>`
  
    wrapper.innerHTML = barraLateral

    const agregarRecetaBtn = document.getElementById('agregarRecetaBtn')
    agregarRecetaBtn.addEventListener('click', mostrarModalAgregarReceta)
  }

  const mostrarModalAgregarReceta = () => {
    // Crear el modal
    const modal = document.createElement('div')
    modal.classList.add('modal', 'fade')
    modal.id = 'agregarRecetaModal'
    modal.tabIndex = '-1'
    modal.setAttribute('aria-labelledby', 'agregarRecetaModalLabel')
    modal.setAttribute('aria-hidden', 'true')

    // Contenido del modal (formulario)
    modal.innerHTML = `
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="agregarRecetaModalLabel">Agregar receta</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <form id="formularioAgregarReceta">
                      <div class="mb-3">
                          <label for="numJoya" class="form-label">Número de la joya</label>
                          <input type="text" class="form-control" id="id_joya" required>
                      </div>

                      <div class="mb-3">
                          <label for="descripcion" class="form-label">Descripción</label>
                          <input type="text" class="form-control" id="descrip" required>
                      </div>
                  </form>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-primary"  data-bs-dismiss="modal" id="guardarRecetaBtn">Guardar</button>
              </div>
          </div>
      </div>
  `

    // Agregar el modal al cuerpo del documento
    document.body.appendChild(modal)

    // Agregar evento al botón de "Guardar" del formulario
    const guardarRecetaBtn = document.getElementById('guardarRecetaBtn')
    guardarRecetaBtn.addEventListener('click', guardarReceta)


    // Mostrar el modal
    const modalInstance = new bootstrap.Modal(modal)
    modalInstance.show()
}

async function agregarReceta(receta){
    const token = sessionStorage.getItem('token')
    try{
        const respuesta = await fetch('http://127.0.0.1:8000/api/recetas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(receta)
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

const guardarReceta = async() => {

    const id_joya = document.getElementById('id_joya').value
    const descripcion = document.getElementById('descrip').value

    const RecetaObjeto = {
        id_joya : id_joya,
        descripcion : descripcion,
    }

    console.log(RecetaObjeto)

    await agregarReceta(RecetaObjeto)

    // Cerrar el modal si es necesario
    const modalElement = document.getElementById('agregarRecetaModal')
    const modal = new bootstrap.Modal(modalElement)
    modal.hide()
}

  crearBarraLateral()