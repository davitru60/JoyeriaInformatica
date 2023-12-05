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
            <a href="entregaLote.html" class="list-group-item list-group-item-action fw-bold">
                <i class="fas fa-box me-2 ms-3"></i> Entregar lote
            </a>

            <a href="inicio.html" class="list-group-item list-group-item-action fw-bold">
                <i class="fas fa-key me-2 ms-3"></i> Ver lotes
            </a>
        </div>
    </div>
</div>`

  wrapper.innerHTML = barraLateral
}

crearBarraLateral()