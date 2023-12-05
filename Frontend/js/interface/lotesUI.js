import { mostrarLotes, eliminarLote } from '../api/lotesAPI.js'

document.addEventListener("DOMContentLoaded", function () {

    async function cargarLotes() {
        const lotes = await mostrarLotes();

        const tabla = $('#example').DataTable()

        // Limpiar la tabla antes de agregar nuevos datos
        tabla.clear().draw()

        lotes.forEach(dato => {
            // Agregar cada fila al DataTable
            const row = tabla.row.add([
                dato.id_lote,
                dato.latitud,
                dato.longitud,
                dato.estado,
                `<button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#myModal${dato.id_lote}"><i class="fas fa-edit"></i></button>` +
                `<button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteModal${dato.id_lote} " ><i class="fas fa-trash-alt"></i></button>`
            ]).draw()

            // Modal editar un lote
            const modalEditar = `
                <div class="modal" id="myModal${dato.id_lote}">
                    <div class="modal-dialog modal-md">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Detalles del lote</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="mb-3">
                                        <label for="ubicacion" class="form-label">ID Lote:</label>
                                        <input type="text" class="form-control" id="ubicacion" value="${dato.id_lote}" readonly>
                                    </div>
                                    <div class="mb-3">
                                        <label for="ubicacion" class="form-label">Ubicación:</label>
                                        <input type="text" class="form-control" id="ubicacion" value="${dato.ubicacion}" readonly>
                                    </div>
                                    <div class="mb-3">
                                        <label for="estado" class="form-label">Estado:</label>
                                        <input type="text" class="form-control" id="estado" value="${dato.estado}" readonly>
                                    </div>
                                    <!-- Agrega más campos según tus necesidades -->
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            `

            const modalEliminar = `
            <div class="modal" id="deleteModal${dato.id_lote}">
            <div class="modal-dialog modal-md">
                <div class="modal-content">
        
                    <div class="modal-header">
                        <h4 class="modal-title">Confirmar eliminación</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
        
        
                    <div class="modal-body">
                        <p>¿Estás seguro de que deseas eliminar este lote?</p>
                    </div>
        
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" id="confirmarEliminacionBtn${dato.id_lote}">Confirmar eliminación</button>
                    </div>
        
                </div>
            </div>
        </div>`



            // Agregar los modales al cuerpo del documento
            document.body.insertAdjacentHTML('beforeend', modalEditar)
            document.body.insertAdjacentHTML('beforeend', modalEliminar)

            // Almacena la información del lote en la fila para acceder a ella cuando sea necesario
            row.nodes().to$().data('lote', dato)
            eliminarLoteUI(dato.id_lote)
        })
    }
    async function eliminarLoteUI(id) {
        const confirmarEliminacionBtn = document.getElementById(`confirmarEliminacionBtn${id}`);

        if (confirmarEliminacionBtn) {
            confirmarEliminacionBtn.addEventListener('click', async () => {
                try {
                    
                    await eliminarLote(id)

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

    cargarLotes()


})