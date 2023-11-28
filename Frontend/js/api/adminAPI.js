import { constantes } from "../utilities/constantes.js"

export async function mostrarUsuario(){
    const rutaUsuario = constantes.urlApi + 'usuarios';

    try {
        const respuesta = await fetch(rutaUsuario, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            // No incluyas un cuerpo en solicitudes GET
        });

        if (!respuesta.ok) {
            // Manejar errores de solicitud no exitosa
            throw new Error(`Error al obtener la lista de usuarios. Código de estado: ${respuesta.status}`);
        }

        const usuarios = await respuesta.json();
        return usuarios.usuarios;
    } catch (error) {
        console.error('Error en la función monstrarUsuario:', error.message);
        // Puedes lanzar el error nuevamente si quieres que se maneje en el contexto superior
        throw error;
    }
}

export async function cogerUnUsuario(id_usuario) {
    const rutaUsuario = constantes.urlApi + 'usuarios';

    try {
        const respuesta = await fetch(rutaUsuario + id_usuario, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            // No incluyas un cuerpo en solicitudes GET
        });

        if (!respuesta.ok) {
            // Manejar errores de solicitud no exitosa
            throw new Error(`Error al obtener el usuario. Código de estado: ${respuesta.status}`);
        }

        const usuario = await respuesta.json();
        return usuario;
    } catch (error) {
        console.error('Error en la función cogerUnUsuario:', error.message);
        // Puedes lanzar el error nuevamente si quieres que se maneje en el contexto superior
        throw error;
    }
}

export async function eliminarUsuario(id_usuario){
    const rutaUsuario = constantes.urlApi + 'usuarios';

    try {
        const respuesta = await fetch(rutaUsuario + id_usuario, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            // No incluyas un cuerpo en solicitudes DELETE
        });

        if (!respuesta.ok) {
            // Manejar errores de solicitud no exitosa
            throw new Error(`Error al eliminar el usuario. Código de estado: ${respuesta.status}`);
        }

        const resultado = await respuesta.json();
        return resultado;
    } catch (error) {
        console.error('Error en la función eliminarUsuario:', error.message);
        // Puedes lanzar el error nuevamente si quieres que se maneje en el contexto superior
        throw error;
    }
}