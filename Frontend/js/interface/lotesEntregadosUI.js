import { mostrarLotes} from '../api/lotesAPI.js'
document.addEventListener("DOMContentLoaded", function () {

    async function cargarLotes() {
        const lotes = await mostrarLotes();

        const tabla = $('#loteEntregado').DataTable()

        // Limpiar la tabla antes de agregar nuevos datos
        tabla.clear().draw()

        lotes.forEach(dato => {
            // Agregar cada fila al DataTable
            const row = tabla.row.add([
                dato.id_lote,
                dato.latitud,
                dato.longitud,
                dato.estado,
                `<button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#myModal${dato.id_lote}"><i class="fas fa-edit"></i></button>`+
                `<button type="button" class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#myModal${dato.id_lote}"><i class="fas fa-plus"></i></button>`
            ]).draw()

            // Modal editar un lote
            const modalEditar = `
                <div class="modal" id="myModal${dato.id_lote}">
                    <div class="modal-dialog modal-md">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Detalles del Lote</h4>
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
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            `

            



            // Agregar los modales al cuerpo del documento
            document.body.insertAdjacentHTML('beforeend', modalEditar)

            // Almacena la información del lote en la fila para acceder a ella cuando sea necesario
            row.nodes().to$().data('lote', dato)
        })
    }
   

    cargarLotes()
  

})