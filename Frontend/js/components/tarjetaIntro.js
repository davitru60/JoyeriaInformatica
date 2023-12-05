const obtenerInformacion = async () => {
    return {
        roles: ['Diseñador', 'Administrador']
    }
}

const crearTarjeta = async () => {
    try {
        const {roles } = await obtenerInformacion()
        const perfilUsuarioGuardado = sessionStorage.getItem('perfilUsuario')
        const perfilUsuario = JSON.parse(perfilUsuarioGuardado)
        const tarjeta = document.getElementById("intro-card")

        const rolAMostrar = roles.length > 0 ? roles[0] : 'Sin Rol'

        const contenido = `
            <h2 class="card-title">Bienvenido ${perfilUsuario.nombre}</h2>
            <p class="card-text">Rol: ${rolAMostrar}</p>`

        tarjeta.innerHTML = contenido
    } catch (error) {
        console.error('Error al obtener información:', error)
    }
}

crearTarjeta()
