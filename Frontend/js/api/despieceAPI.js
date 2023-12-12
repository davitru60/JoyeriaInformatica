import { constantes } from '../utilities/constantes.js'
export async function modificarEstadoLote(id, lote) {
    const urlApi = constantes.urlApi
    try {
        const token = sessionStorage.getItem('token')
        const respuesta = await fetch(urlApi + 'despiece/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(lote)

        })


        if (respuesta.ok) {
            const mensaje = await respuesta.json()
            console.log('Lote clasificado correctamente:', mensaje)
        } else {
            console.error('Error al clasificar')
        }

    } catch (error) {

    }
}

export async function despiezarLote(lote, id) {
    const urlApi = constantes.urlApi
    const token = sessionStorage.getItem('token')

    try {
        const respuesta = await fetch(urlApi + 'despiece/' + id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(lote)
        })

        if (respuesta.status == 422) {
            const mensaje = await respuesta.json()

            const errorModal = new bootstrap.Modal(document.getElementById('errorModal'))

            // Asignar el mensaje al cuerpo del modal con saltos de línea
            const errorModalBody = document.getElementById('errorModalBody')
            const mensajeError = mensaje.error.map((message) => `- ${message}`).join('\n')
            errorModalBody.innerText = mensajeError

            errorModal.show()

        } else {
            const successModal = new bootstrap.Modal(document.getElementById('successModal'))

            const successModalBody = document.getElementById('successModalBody')
            successModalBody.innerText = 'El componente se ha añadido con exito '

            successModal.show();
            
            setTimeout(() => {
                successModal.hide();
            }, 1500)
        }

    } catch (error) {

    }
}

