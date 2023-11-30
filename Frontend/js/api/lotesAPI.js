import { constantes } from '../utilities/constantes.js'
export async function mostrarLotes() {
    const urlApi = constantes.urlApi

    try {
        const token = localStorage.getItem('token');

        const respuesta = await fetch(urlApi + 'lotes', {
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

export async function eliminarLote(id) {
    const urlApi = constantes.urlApi

    try {
        const token = localStorage.getItem('token')

        const respuesta = await fetch(urlApi + 'lotes/' + id, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })

        if (respuesta.ok) {
            const mensaje = await respuesta.json()
            console.log('Lote eliminado correctamente:', mensaje)
        } else {
            console.error('No se pudo eliminar el lote')
        }

    } catch (error) {
        console.error('Error al eliminar el lote:', error)
    }
}

