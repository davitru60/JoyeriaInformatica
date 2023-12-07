import { constantes } from '../utilities/constantes.js'
export async function mostrarLotes() {
    const urlApi = constantes.urlApi

    try {
        const token = sessionStorage.getItem('token')

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

export async function mostrarLotesNoClasificados() {
    const urlApi = constantes.urlApi

    try {
        const respuesta = await fetch(urlApi + 'lotesNoClasificados')
        if (respuesta.ok) {
            const datos = await respuesta.json()
            return datos.lotes
        } else {
            console.log('Algo fue mal')
        }
    } catch (error) {

    }
}

export async function eliminarLote(id) {
    const urlApi = constantes.urlApi

    try {
        const token = sessionStorage.getItem('token')

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

export async function entregarLote(lote) {
    const urlApi = constantes.urlApi
    const token = sessionStorage.getItem('token')
    try {
        const respuesta = await fetch(urlApi + 'lotes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(lote)
        })

        if (respuesta.status == 422) {
            const datos = await respuesta.json()

            console.log(datos)


            const alerta = document.createElement('div')
            alerta.classList.add('alert', 'alert-danger', 'mt-3')
            alerta.textContent = datos.errores


            const fila = document.querySelector('.form-group')
            fila.insertBefore(alerta, fila.firstChild)

            setTimeout(() => {
                alerta.remove()
            }, 1500)

        } else {
            const alertaExito = document.createElement('div')
            alertaExito.classList.add('alert', 'alert-success', 'mt-3')
            alertaExito.textContent = 'Lote entregado con éxito.'

            const fila = document.querySelector('.form-group');
            fila.insertBefore(alertaExito, fila.firstChild);

            setTimeout(() => {
                alertaExito.remove();
            }, 1500);

        }
    } catch (error) {

    }
}