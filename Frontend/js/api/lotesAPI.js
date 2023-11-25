import { constantes } from '../utilities/constantes.js';
export async function mostrarLotes() {
    const urlApi = constantes.urlApi;

    try {
        const token = localStorage.getItem('token');

        const respuesta = await fetch(urlApi + 'mostrarLotes', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })

        if (respuesta.ok) {
            const datos = await respuesta.json()
            return datos.lotes
        } else {
            console.log('Algo fue mal')
        }

    } catch (error) {
        console.error('Error al obtener los lotes:', error)
    }
}

mostrarLotes()