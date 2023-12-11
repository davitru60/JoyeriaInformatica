import { constantes } from '../utilities/constantes.js'

export async function verificarComponentes(ingredientes){
    const urlApi = constantes.urlApi
    try{
        const respuesta = await fetch(urlApi + 'verificarComponentes',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
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
    try{
        const respuesta = await fetch(urlApi + 'calcular',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
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

