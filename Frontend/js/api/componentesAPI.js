import { constantes } from '../utilities/constantes.js'
export async function mostrarComponentes(){
    const urlApi = constantes.urlApi

    try{
        const respuesta = await fetch(urlApi+'componente')
        if (respuesta.ok) {
            const datos = await respuesta.json()
            return datos.componente
        } else {
            console.log('Algo fue mal')
        }
    }catch(error){
        console.error('Error al obtener los componentes:', error)
    }
}

export async function modificarComponente(id,componente){
    const urlApi = constantes.urlApi
    try{
        const respuesta = await fetch(urlApi+'componente/'+ id,{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(componente)

        })

        if(respuesta.ok){
            const mensaje = await respuesta.json()
            console.log('Componente modificado correctamente:', mensaje)
        }else{
            console.error('No se pudo modificar el componente')
        }

    }catch(error){

    }
}

export async function eliminarComponente(id){
    const urlApi = constantes.urlApi
    try{
        const respuesta = await fetch(urlApi+'componente/'+id,{
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(respuesta.ok){
            const mensaje = await respuesta.json()
            console.log('Componente eliminado correctamente:', mensaje)
        }else{
            console.error('No se pudo eliminar el componente')
        }
    }catch(error){
        console.error('Error al eliminar el componente:', error)
    }
    
}