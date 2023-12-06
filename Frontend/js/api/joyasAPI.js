import { constantes } from '../utilities/constantes.js'
export async function mostrarJoyas(){
    const urlApi = constantes.urlApi

    try{
        const respuesta = await fetch(urlApi+'joya')
        if (respuesta.ok) {
            const datos = await respuesta.json()
            return datos.joyas
        } else {
            console.log('Algo fue mal')
        }
    }catch(error){
        console.error('Error al obtener los joyas:', error)
    }
}

export async function modificarJoyas(id,joyas){
    const urlApi = constantes.urlApi
    try{
        const respuesta = await fetch(urlApi+'joya/'+ id,{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(joyas)

        })

        if(respuesta.ok){
            const mensaje = await respuesta.json()
            console.log('joyas modificado correctamente:', mensaje)
        }else{
            console.error('No se pudo modificar el joyas')
        }

    }catch(error){

    }
}

export async function eliminarJoyas(id){
    const urlApi = constantes.urlApi
    try{
        const respuesta = await fetch(urlApi+'joya/'+id,{
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(respuesta.ok){
            const mensaje = await respuesta.json()
            console.log('joyas eliminado correctamente:', mensaje)
        }else{
            console.error('No se pudo eliminar el joyas')
        }
    }catch(error){
        console.error('Error al eliminar el joyas:', error)
    }
    
}