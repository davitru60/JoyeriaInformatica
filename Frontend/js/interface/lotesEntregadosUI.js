import {mostrarLotesNoClasificados} from '../api/lotesAPI.js'
import { mostrarComponentes } from '../api/componentesAPI.js'
import { modificarEstadoLote } from '../api/despieceAPI.js'

document.addEventListener("DOMContentLoaded", function () {

    async function cargarLotes() {
        const lotes = await mostrarLotesNoClasificados()
        const componentes = await mostrarComponentes()

        const tabla = $('#loteEntregado').DataTable()

        // Limpiar la tabla antes de agregar nuevos datos
        tabla.clear().draw()

        lotes.forEach(dato => {
            // Agregar cada fila al DataTable
            const opcionesComponentes = componentes.map(componente => `<option value="${componente.id_componente}">${componente.nombre}</option>`).join('');
            const row = tabla.row.add([
                dato.id_lote,
                dato.latitud,
                dato.longitud,
                dato.estado,
                `<button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#myModal${dato.id_lote}"><i class="fas fa-edit"></i></button>`+
                `<button type="button" class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#modalAgregar${dato.id_lote}"><i class="fas fa-plus"></i></button>`
            ]).draw()

            // Modal editar un lote
            const modalEditar = `
                <div class="modal" id="myModal${dato.id_lote}">
                    <div class="modal-dialog modal-md">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Modificar estado del lote</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="mb-3">
                                        <label for="ubicacion" class="form-label">ID Lote:</label>
                                        <input type="text" class="form-control" id="ubicacion" value="${dato.id_lote}" readonly>
                                    </div>

                                    <div class="mb-3">
                                    <label for="hwDropdown" class="form-label">Modificar el estado</label>
                                    <select class="form-select" id="estadoDropdown" required>
                                        <option>Clasificado</option>
                                    </select>
                                </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-primary"  data-bs-dismiss="modal" id="modificarLoteBtn${dato.id_lote}">Modificar</button>
                            </div>
                        </div>
                    </div>
                </div>
            `

            const modalAgregar = `
                <div class="modal" id="modalAgregar${dato.id_lote}">
                    <div class="modal-dialog modal-md">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Agregar componente de despiece</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="mb-3">
                                        <label for="numLote" class="form-label">Numero lote:</label>
                                        <input type="text" class="form-control" id="numLote" value="${dato.id_lote}" readonly>
                                    </div>
                                    <div class="mb-3">
                                        <label for="hwDropdown" class="form-label">Componente</label>
                                        <select class="form-select" id="hwDropdown" required>
                                            ${opcionesComponentes}
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="cantidad" class="form-label">Cantidad:</label>
                                        <input type="text" class="form-control" id="cantidad">
                                    </div>

                                    <div class="mb-3">
                                        <label for="descripcion" class="form-label">Descripcion:</label>
                                        <input type="text" class="form-control" id="descripcion">
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
            document.body.insertAdjacentHTML('beforeend', modalAgregar)

            // Almacena la información del lote en la fila para acceder a ella cuando sea necesario
            row.nodes().to$().data('lote', dato)
            modificarEstadoLoteUI(dato.id_lote)
        })
    }

    async function modificarEstadoLoteUI(id){
        const modificarBtn = document.getElementById(`modificarLoteBtn${id}`)
        modificarBtn.addEventListener('click', async () => {
            const modalElement = document.getElementById(`myModal${id}`)
            const estadoDropdown = modalElement.querySelector('#estadoDropdown')
            const estado = estadoDropdown.options[estadoDropdown.selectedIndex].value


            const loteObjeto={
                estado: estado
            }

            console.log(loteObjeto)

            await modificarEstadoLote(id,loteObjeto)

            const modal = new bootstrap.Modal(modalElement)
            modal.hide()
        })

    }
   

    cargarLotes()
  

})