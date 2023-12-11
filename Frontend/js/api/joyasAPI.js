import { constantes } from '../utilities/constantes.js'
export async function mostrarJoyas(){
    const urlApi = constantes.urlApi
    const token = sessionStorage.getItem('token')
    try {
        const respuesta = await fetch(urlApi + 'joya', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
    
        })

        if (!respuesta.ok) {
            throw new Error(`Error al obtener la lista de joya. Código de estado: ${respuesta.status}`);
        }

        const joya = await respuesta.json();
        return joya.joya
    } catch (error) {
        console.error('Error en la función monstrarJoya:', error.message)
    }
}

export async function modificarJoyas(id,joyas){
    const urlApi = constantes.urlApi
    const token = sessionStorage.getItem('token')
    try{
        const respuesta = await fetch(urlApi+'joya/'+ id,{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
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
    const token = sessionStorage.getItem('token')
    try{
        const respuesta = await fetch(urlApi+'joya/'+id,{
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
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