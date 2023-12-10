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
  }

  crearBarraLateral()