import { constantes } from '../utilities/constantes.js'

export async function mostrarIngredientes(){
    const urlApi = constantes.urlApi
    const token = sessionStorage.getItem('token')
    try{
        const respuesta = await fetch(urlApi + 'ingredientes',{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        })

        if(respuesta.ok){
            const ingredientes = await respuesta.json()
            return ingredientes.ingredientes
        }
    }catch(error){
        
    }
}

export async function mostrarIngredienteJoya(id){
    const urlApi = constantes.urlApi
    const token = sessionStorage.getItem('token')
    try{
        const respuesta = await fetch(urlApi + 'ingredientes/'+id,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        })

        if(respuesta.ok){
            const ingredientes = await respuesta.json()
            return ingredientes
        }
    }catch(error){
        
    }

}

