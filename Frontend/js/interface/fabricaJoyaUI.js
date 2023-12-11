import { mostrarJoyas } from "../api/joyasAPI.js"
import { mostrarIngredienteJoya } from "../api/ingredientesAPI.js"
import { verificarComponentes, calcularCantidadJoyas } from "../api/fabricacionAPI.js"

document.addEventListener("DOMContentLoaded", function () {

    async function cargarJoyas() {
        const joyas = await mostrarJoyas();
        const joyaDropdown = document.querySelector('#joyaDeseada');

        joyaDropdown.addEventListener('change', async () => {
            const joyaSeleccionada = joyaDropdown.value;

            if (joyaSeleccionada) {
                const ingredientesJoya = await mostrarIngredienteJoya(joyaSeleccionada);
                mostrarInformacion(ingredientesJoya);
            }
        });

        joyas.forEach(joya => {
            const option = document.createElement('option');
            option.value = joya.id_joya;
            option.text = joya.nombre;
            joyaDropdown.add(option);
        });
    }

    async function mostrarInformacion(ingredientesJoya) {
        const dispTextoElemento = document.getElementById('disponibilidad');
        const cantidadesTextoElemento = document.getElementById('cantidadesTexto');

        const disponibilidad = await verificarComponentes(ingredientesJoya);
        const disponibilidadHTML = disponibilidad.map(elemento => `<p class="card-text ms-2">- Disponibilidad de ${elemento.nombre}: ${elemento.cantDisponible} unidades</p>`).join('');

        dispTextoElemento.innerHTML = disponibilidadHTML;

        const cantidad = await calcularCantidadJoyas(ingredientesJoya);
        cantidadesTextoElemento.textContent = `- Se pueden fabricar ${cantidad.cantidad_maxima_joyas} joyas de este tipo`;
    }

    cargarJoyas();

});
