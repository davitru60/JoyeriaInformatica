import { constantes } from '../utilities/constantes.js'
export async function mostrarComponentes(){
    const urlApi = constantes.urlApi

    try{

        const token = sessionStorage.getItem('token')
        const respuesta = await fetch(urlApi+'componente',{
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        if (respuesta.ok) {
            const datos = await respuesta.json()
            return datos.componente
        } else {
            window.location.href="../html/pagina403.html"
        }
    }catch(error){
        console.error('Error al obtener los componentes:', error)
    }
}

export async function modificarComponente(id,componente){
    const urlApi = constantes.urlApi
    try{

        const token = sessionStorage.getItem('token')
        const respuesta = await fetch(urlApi+'componente/'+ id,{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
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

        const token = sessionStorage.getItem('token')
        const respuesta = await fetch(urlApi+'componente/'+id,{
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
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