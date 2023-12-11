

const crearTarjeta = async () => {
    try {
        const perfilUsuarioGuardado = sessionStorage.getItem('perfilUsuario')
        const perfilUsuario = JSON.parse(perfilUsuarioGuardado)
        const tarjeta = document.getElementById("intro-card")

        const contenido = `
            <h2 class="card-title">Bienvenido ${perfilUsuario.nombre}</h2>
            `

        tarjeta.innerHTML = contenido
    } catch (error) {
        console.error('Error al obtener información:', error)
    }
}

crearTarjeta()
