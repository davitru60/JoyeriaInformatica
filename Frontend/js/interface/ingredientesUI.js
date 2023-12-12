import { mostrarIngredientes } from "../api/ingredientesAPI.js"

document.addEventListener("DOMContentLoaded", function () {  
    async function cargarLotes() {
      
        const ingredientes = await mostrarIngredientes()
        const tabla = $('#ingredientes').DataTable()

        // Limpiar la tabla antes de agregar nuevos datos
        tabla.clear().draw()

        ingredientes.forEach(dato => {
            // Agregar cada fila al DataTable
            const row = tabla.row.add([
                dato.descripcion,
                dato.componente,
                dato.cantidad
            ]).draw()

            
            // Almacena la información del lote en la fila para acceder a ella cuando sea necesario
            row.nodes().to$().data('ingrediente', dato)
            
        })
    }

    cargarLotes()
})