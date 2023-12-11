import { constantes } from '../utilities/constantes.js'

export async function mostrarIngredientes(){
    const urlApi = constantes.urlApi
    try{
        const respuesta = await fetch(urlApi + 'ingredientes')

        if(respuesta.ok){
            const ingredientes = await respuesta.json()
            return ingredientes.ingredientes
        }
    }catch(error){
        
    }
}

export async function mostrarIngredienteJoya(id){
    const urlApi = constantes.urlApi
    try{
        const respuesta = await fetch(urlApi + 'ingredientes/'+id)

        if(respuesta.ok){
            const ingredientes = await respuesta.json()
            return ingredientes
        }
    }catch(error){
        
    }

}

