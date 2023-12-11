import { constantes } from "../utilities/constantes.js"

export async function mostrarUsuario() {
    const rutaUsuario = constantes.urlApi + 'usuarios';

    try {
        const token = sessionStorage.getItem('token')
        const respuesta = await fetch(rutaUsuario, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
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
    const rutaUsuario = constantes.urlApi + 'usuarios/';

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

export async function eliminarUsuario(id_usuario) {
    const rutaUsuario = constantes.urlApi + 'usuarios/';

    try {
        const token = sessionStorage.getItem('token')
        const respuesta = await fetch(rutaUsuario + id_usuario, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
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
export async function editarUsuario(id_usuario, usuario) {
    const rutaUsuario = constantes.urlApi + 'usuarios/';
    const token = sessionStorage.getItem('token')
    try {
        const respuesta = await fetch('http://127.0.0.1:8000/api/usuarios/' + id_usuario, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(usuario),
        });

        if (!respuesta.ok) {

            throw new Error(`Error al eliminar el usuario. Código de estado: ${respuesta.status}`);
        }

        const resultado = await respuesta.json();
        return resultado;
    } catch (error) {
        console.error('Error en la función eliminarUsuario:', error.message);

        throw error;
    }
}
export async function anadirUsuario(usuarioCreado) {
    const rutaUsuario = constantes.urlApi + 'usuarios/';
    const token = sessionStorage.getItem('token')
    
    try {
        const respuesta = await fetch(rutaUsuario, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(usuarioCreado),
        })
        if (!respuesta.ok) {

            throw new Error(`Error al eliminar el usuario. Código de estado: ${respuesta.status}`);
        }
        const resultado = await respuesta.json();
        return resultado;
    } catch (error) {
        console.error('Error en la función eliminarUsuario:', error.message);

        throw error;
    }
}