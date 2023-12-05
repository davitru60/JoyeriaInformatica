import { mostrarComponentes,eliminarComponente,modificarComponente} from "../api/componentesAPI.js"

document.addEventListener("DOMContentLoaded", function () {
    async function cargarComponentes() {
        const componentes = await mostrarComponentes()
        const tabla = $('#componentes').DataTable()
        tabla.clear().draw()

        componentes.forEach(dato => {
            // Agregar cada fila al DataTable
            const row = tabla.row.add([
                dato.id_comp,
                dato.nombre,
                dato.hw,
                `<button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#myModal${dato.id_comp}"><i class="fas fa-edit"></i></button>` +
                `<button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteModal${dato.id_comp} " ><i class="fas fa-trash-alt"></i></button>`
            ]).draw()

            const modalEditar = `
            <div class="modal" id="myModal${dato.id_comp}">
                <div class="modal-dialog modal-md">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Detalles del componente</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="ubicacion" class="form-label">ID Componente:</label>
                                    <input type="text" class="form-control" id="idComponente" value="${dato.id_comp}" readonly>
                                </div>
                                <div class="mb-3">
                                    <label for="ubicacion" class="form-label">Nombre:</label>
                                    <input type="text" class="form-control" id="nombre" value="${dato.nombre}">
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
                            <button type="button" class="btn btn-success" data-bs-dismiss="modal" id="modificarBtn${dato.id_comp}">Modificar</button>
                        </div>
                    </div>
                </div>
            </div>
        `
        const modalEliminar = `
        <div class="modal" id="deleteModal${dato.id_comp}">
        <div class="modal-dialog modal-md">
            <div class="modal-content">
    
                <div class="modal-header">
                    <h4 class="modal-title">Confirmar eliminación</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
    
    
                <div class="modal-body">
                    <p>¿Estás seguro de que deseas eliminar este componente?</p>
                </div>
    
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" id="confirmarEliminacionBtn${dato.id_comp}">Confirmar eliminación</button>
                </div>
    
            </div>
        </div>
    </div>`
            


            // Agregar los modales al cuerpo del documento
            document.body.insertAdjacentHTML('beforeend', modalEditar)
            document.body.insertAdjacentHTML('beforeend', modalEliminar)

            // Almacena la información del lote en la fila para acceder a ella cuando sea necesario
            row.nodes().to$().data('componentes', dato)
            eliminarComponenteUI(dato.id_comp)
            modificarComponenteUI(dato.id_comp)
        })
    
    }

    async function eliminarComponenteUI(id){
        const confirmarEliminacionBtn = document.getElementById(`confirmarEliminacionBtn${id}`)
        if (confirmarEliminacionBtn) {
            confirmarEliminacionBtn.addEventListener('click', async () => {
                try {
                    
                    await eliminarComponente(id)

                    // Cierra el modal después de eliminar
                    const modalElement = document.getElementById(`deleteModal${id}`)
                    const modal = new bootstrap.Modal(modalElement)
                    modal.hide()

                    

                } catch (error) {
                    console.error('Error al confirmar la eliminación:', error)
                }
            })
        }
    }

    async function modificarComponenteUI(id) {
        const modificarBtn = document.getElementById(`modificarBtn${id}`)
    
        if (modificarBtn) {
            modificarBtn.addEventListener('click', async () => {
                try {
                    // Obtener las referencias a los campos de texto dentro del modal específico
                    const modalElement = document.getElementById(`myModal${id}`)
                    const nombreComp = modalElement.querySelector('#nombre').value
                    const hwDropdown = modalElement.querySelector('#hwDropdown')
                    const hw = hwDropdown.options[hwDropdown.selectedIndex].value
    
                    const componenteObjeto = {
                        nombre: nombreComp,
                        hw: hw
                    }
    
                    await modificarComponente(id, componenteObjeto)
    
                    // Cerrar el modal después de modificar
                    const modal = new bootstrap.Modal(modalElement)
                    modal.hide();
                } catch (error) {
                    console.error('Error al confirmar la modificación:', error)
                }
            });
        }
    }
    
    
    
    
    cargarComponentes()

})