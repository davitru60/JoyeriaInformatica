import { constantes } from '../utilities/constantes.js'
export async function modificarEstadoLote(id,lote){
    const urlApi = constantes.urlApi
    try{
        const token = sessionStorage.getItem('token')
        const respuesta = await fetch(urlApi+'despiece/'+id,{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(lote)

        })

        
        if(respuesta.ok){
            const mensaje = await respuesta.json()
            console.log('Lote clasificado correctamente:', mensaje)
        }else{
            console.error('Error al clasificar')
        }

    }catch(error){

    }
}

export async function despiezarLote(id){
    const urlApi = constantes.urlApi
    const token = sessionStorage.getItem('token')

    try{
        const respuesta = await fetch(urlApi+'despiece/'+id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(lote)
        })

        if(respuesta.ok){
            const mensaje = await respuesta.json()
            console.log(mensaje)
            
        }

    }catch(error){

    }
}