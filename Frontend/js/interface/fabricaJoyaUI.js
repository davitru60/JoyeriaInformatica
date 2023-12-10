import { mostrarJoyas } from "../api/joyasAPI.js"
import { mostrarIngredienteJoya } from "../api/ingredientesAPI.js"
import { verificarComponentes, calcularCantidadJoyas } from "../api/fabricacionAPI.js"

document.addEventListener("DOMContentLoaded", function () {

    async function cargarJoyas() {
        const joyas = await mostrarJoyas()
        const joyaDropdown = document.querySelector('#joyaDeseada')

        joyas.forEach(async joya => {
            const option = document.createElement('option');
            option.value = joya.id_joya;
            option.text = joya.nombre;
            joyaDropdown.add(option);

            const ingredientesJoya = await mostrarIngredienteJoya(joya.id_joya)
            const dispTextoElemento = document.getElementById('disponibilidad');
            const cantidadesTextoElemento = document.getElementById('cantidadesTexto');

            const disponibilidad = await verificarComponentes(ingredientesJoya);
            const disponibilidadHTML = disponibilidad.map(elemento => `<p class="card-text ms-2">- Disponibilidad de ${elemento.nombre}: ${elemento.cantDisponible} unidades</p>`).join('');

            dispTextoElemento.innerHTML = disponibilidadHTML;

            const cantidad = await calcularCantidadJoyas(ingredientesJoya);
            cantidadesTextoElemento.textContent = `Se pueden fabricar ${cantidad} joyas.`;


            mostrarCantidadJoyas(ingredientesJoya)

        })
    }

    async function mostrarCantidadJoyas(ingredientesJoya) {
        const cantidadesTextoElemento = document.getElementById('cantidadesTexto')
        const cantidad = await calcularCantidadJoyas(ingredientesJoya)
        cantidadesTextoElemento.textContent = `- Se pueden fabricar ${cantidad.cantidad_maxima_joyas} joyas de este tipo`;
    }
    cargarJoyas()

})