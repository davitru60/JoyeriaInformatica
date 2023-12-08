import { mostrarRecetas,eliminarRecetas,modificarRecetas} from "../api/recetasAPI.js"

document.addEventListener("DOMContentLoaded", function () {
    async function cargarRecetas() {
        const recetas = await mostrarRecetas()
        console.log(recetas)
        const tabla = $('#recetas').DataTable()
        tabla.clear().draw()

        recetas.forEach(dato => {
            const row = tabla.row.add([
                dato.id_receta,
                dato.id_joya,
                dato.descricion,
                `<button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#myModal${dato.id_receta}"><i class="fas fa-edit"></i></button>` +
                `<button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteModal${dato.id_receta} " ><i class="fas fa-trash-alt"></i></button>`
            ]).draw()

            const modalEditar = `
            <div class="modal" id="myModal${dato.id_receta}">
                <div class="modal-dialog modal-md">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Detalles de la joya</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="ubicacion" class="form-label">ID Joyas:</label>
                                    <input type="text" class="form-control" id="idJoya" value="${dato.id_receta}" readonly>
                                </div>
                                <div class="mb-3">
                                    <label for="ubicacion" class="form-label">Nombre:</label>
                                    <input type="text" class="form-control" id="id_joya" value="${dato.id_joya}">
                                </div>
                                <div class="mb-3">
                                    <label for="ubicacion" class="form-label">URL descricion:</label>
                                    <input type="text" class="form-control" id="descricion" value="${dato.descricion}">
                                </div>
                          
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success" data-bs-dismiss="modal" id="modificarBtn${dato.id_receta}">Modificar</button>
                        </div>
                    </div>
                </div>
            </div>
        `
        const modalEliminar = `
        <div class="modal" id="deleteModal${dato.id_receta}">
        <div class="modal-dialog modal-md">
            <div class="modal-content">
    
                <div class="modal-header">
                    <h4 class="modal-title">Confirmar eliminación</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
    
    
                <div class="modal-body">
                    <p>¿Estás seguro de que deseas eliminar este joya?</p>
                </div>
    
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" id="confirmarEliminacionBtn${dato.id_receta}">Confirmar eliminación</button>
                </div>
    
            </div>
        </div>
    </div>`
            


            // Agregar los modales al cuerpo del documento
            document.body.insertAdjacentHTML('beforeend', modalEditar)
            document.body.insertAdjacentHTML('beforeend', modalEliminar)

            // Almacena la información del lote en la fila para acceder a ella cuando sea necesario
            row.nodes().to$().data('recetas', dato)
            eliminarRecetasUI(dato.id_receta)
            modificarRecetasUI(dato.id_receta)
        })
    
    }

    async function eliminarRecetasUI(id){
        const confirmarEliminacionBtn = document.getElementById(`confirmarEliminacionBtn${id}`)
        if (confirmarEliminacionBtn) {
            confirmarEliminacionBtn.addEventListener('click', async () => {
                try {
                    
                    await eliminarRecetas(id)

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

    async function modificarRecetasUI(id) {
        const modificarBtn = document.getElementById(`modificarBtn${id}`)
    
        if (modificarBtn) {
            modificarBtn.addEventListener('click', async () => {
                try {
                    // Obtener las referencias a los campos de texto dentro del modal específico
                    const modalElement = document.getElementById(`myModal${id}`)
                    const numJoya = modalElement.querySelector('#id_joya').value
                    const descricion = modalElement.querySelector('#descricion').value
    
                    const recetaObjeto = {
                        id_joya: numJoya,
                        descricion: descricion
                    }
    
                    await modificarRecetas(id, recetaObjeto)
    
                    // Cerrar el modal después de modificar
                    const modal = new bootstrap.Modal(modalElement)
                    modal.hide();
                } catch (error) {
                    console.error('Error al confirmar la modificación:', error)
                }
            });
        }
    }
    
    
    
    
    cargarRecetas()

})