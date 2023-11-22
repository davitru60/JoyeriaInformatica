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
            <a href="#" class="list-group-item list-group-item-action fw-bold">
                <i class="fas fa-box me-2 ms-3"></i> Entregar lote
            </a>
        </div>

        <a href="#" class="list-group-item list-group-item-action bg-transparent text-danger fw-bold"><i
                class="fas fa-power-off me-2"></i>Logout</a>
    </div>
</div>`

  wrapper.innerHTML = barraLateral
}

crearBarraLateral()