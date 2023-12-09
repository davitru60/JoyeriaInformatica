import { constantes } from '../utilities/constantes.js'
export async function mostrarJoyas(){
    const urlApi = constantes.urlApi
    try {
        const respuesta = await fetch(urlApi + 'joya', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            // No incluyas un cuerpo en solicitudes GET
        });

        if (!respuesta.ok) {
            // Manejar errores de solicitud no exitosa
            throw new Error(`Error al obtener la lista de joya. Código de estado: ${respuesta.status}`);
        }

        const joya = await respuesta.json();
        return joya.joya;
    } catch (error) {
        console.error('Error en la función monstrarJoya:', error.message);
        // Puedes lanzar el error nuevamente si quieres que se maneje en el contexto superior
        throw error;
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