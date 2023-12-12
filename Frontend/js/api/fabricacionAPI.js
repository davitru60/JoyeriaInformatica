import { constantes } from '../utilities/constantes.js'

export async function verificarComponentes(ingredientes){
    const urlApi = constantes.urlApi
    const token = sessionStorage.getItem('token')
    try{
        const respuesta = await fetch(urlApi + 'verificarComponentes',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body:JSON.stringify(ingredientes)
        })

        if(respuesta.ok){
            const disponibilidad = await respuesta.json()
            return disponibilidad
        }
    }catch(error){
        
    }
}

export async function calcularCantidadJoyas(ingredientes){
    const urlApi = constantes.urlApi
    const token = sessionStorage.getItem('token')
    try{
        const respuesta = await fetch(urlApi + 'calcular',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body:JSON.stringify(ingredientes)
        })

        if(respuesta.ok){
            const cantidad = await respuesta.json()
            return cantidad
        }
    }catch(error){
        
    }
}

export async function fabricarJoyas(ingredientes) {
    const urlApi = constantes.urlApi
    const token = sessionStorage.getItem('token')

    try {
        const respuesta = await fetch(urlApi + 'fabricar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(ingredientes)
        })

        const mensaje = await respuesta.json()

        // Eliminar la alerta anterior antes de mostrar una nueva
        const alertasAnteriores = document.querySelectorAll('.alert')
        alertasAnteriores.forEach(alertaAnterior => alertaAnterior.remove())

        // Crear y mostrar la nueva alerta
        const alerta = document.createElement('div')
        alerta.classList.add('alert', 'mt-3')

        if (respuesta.ok) {
            alerta.classList.add('alert-success')
            alerta.textContent = `Éxito: ${mensaje.mensaje}`
        } else if (respuesta.status === 400) {
            alerta.classList.add('alert-danger')
            alerta.textContent = `Error : ${mensaje.mensaje}`
        } else {
            alerta.classList.add('alert-danger')
            alerta.textContent = `Error en la solicitud: ${mensaje.mensaje}`
        }

        filaFabrica.insertBefore(alerta, filaFabrica.firstChild)

        setTimeout(() => {
            alerta.remove()
        }, 2000)

    } catch (error) {
        // Manejar errores de red u otros
        console.error('Error en la solicitud:', error)
    }
}
