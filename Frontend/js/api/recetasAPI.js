import { constantes } from '../utilities/constantes.js'
export async function mostrarRecetas(){
    const urlApi = constantes.urlApi
    try {
        const respuesta = await fetch(urlApi + 'recetas', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            // No incluyas un cuerpo en solicitudes GET
        });

        if (!respuesta.ok) {
            // Manejar errores de solicitud no exitosa
            throw new Error(`Error al obtener la lista de recetas. Código de estado: ${respuesta.status}`);
        }

        const recetas = await respuesta.json();
        return recetas.receta;
    } catch (error) {
        console.error('Error en la función monstrarRecetas:', error.message);
        // Puedes lanzar el error nuevamente si quieres que se maneje en el contexto superior
        throw error;
    }
}

export async function modificarRecetas(id,recetas){
    const urlApi = constantes.urlApi
    try{
        const respuesta = await fetch(urlApi+'recetas/'+ id,{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recetas)

        })

        if(respuesta.ok){
            const mensaje = await respuesta.json()
            console.log('recetas modificado correctamente:', mensaje)
        }else{
            console.error('No se pudo modificar el recetas')
        }

    }catch(error){

    }
}

export async function eliminarRecetas(id){
    const urlApi = constantes.urlApi
    try{
        const respuesta = await fetch(urlApi+'recetas/'+id,{
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(respuesta.ok){
            const mensaje = await respuesta.json()
            console.log('recetas eliminado correctamente:', mensaje)
        }else{
            console.error('No se pudo eliminar el recetas')
        }
    }catch(error){
        console.error('Error al eliminar el recetas:', error)
    }
    
}