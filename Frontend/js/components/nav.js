const obtenerRoles = async () => {
    try {
        const token = sessionStorage.getItem('token');

        const respuesta = await fetch('http://127.0.0.1:8000/api/roles', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })

        if (respuesta.ok) {
            const roles = await respuesta.json()
            sessionStorage.setItem('roles', JSON.stringify(roles.usuario))
        }
    } catch (error) {

    }

}
obtenerRoles()



async function mostrarPerfilUsuario() {
    try {
        const token = sessionStorage.getItem('token');
        const respuesta = await fetch('http://127.0.0.1:8000/api/perfil', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })

        if (respuesta.ok) {
            const datos = await respuesta.json()
            sessionStorage.setItem('perfilUsuario', JSON.stringify(datos.usuario))
        } else {
            console.log('Algo fue mal')
        }

    } catch (error) {
        console.error('Error al obtener los lotes:', error)
    }
}

mostrarPerfilUsuario()



const crearNavegacion = async () => {
    const contentWrapper = document.getElementById("page-content-wrapper");

    try {
        const roles = JSON.parse(sessionStorage.getItem('roles'))
        const perfilUsuarioGuardado = sessionStorage.getItem('perfilUsuario')
        const perfilUsuario = JSON.parse(perfilUsuarioGuardado)


        const rolesHTML = roles
            .map(
                (rol) => `
            <li>
                <a class="dropdown-item" id="${rol.toLowerCase()}">
                    <span class="fw-bold">${rol}</span>
                </a>
            </li>
        `
            )
            .join("");

        const navBar = `
            <nav class="navbar navbar-expand-lg navbar-light py-4 px-4">
                <div class="d-flex align-items-center">
                    <i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>
                </div>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="far fa-user me-2" style="color:rgb(0, 0, 0)"></i>
                                <span class="user-name">${perfilUsuario.nombre}</span>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li>
                                    <div class="dropdown-item" id="perfilUsuario">
                                        <i class="fas fa-user-circle me-2"></i>
                                        <span class="fw-bold">Perfil de usuario</span>
                                    </div>
                                </li>
                                
                           
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownRoles" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-key me-2" style="color:rgb(0, 0, 0)"></i>
                                <span class="user-name">Roles</span>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownRoles">
                                ${rolesHTML}
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
            
            <!-- Modal HTML -->
            <div class="modal fade" id="perfilUsuarioModal" tabindex="-1" aria-labelledby="perfilUsuarioModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="perfilUsuarioModalLabel">Perfil de Usuario</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form id="perfilUsuarioForm">
                            <div class="modal-body">
                                <!-- Contenido del perfil de usuario -->

                                <div class="mb-3 text-center">
                                    <img id="modalFotoUsuario" src="" alt="Foto de Usuario" class="img-fluid rounded-circle" style="max-width: 150px;">
                                </div>
                                
                                <div class="mb-3">
                                    <label for="modalNombreUsuario" class="form-label">Nombre:</label>
                                    <input type="text" class="form-control" id="modalNombreUsuario" readonly>
                                </div>

                            
                                <div class="mb-3">
                                    <label for="modalPrimerApellido" class="form-label">Primer Apellido:</label>
                                    <input type="text" class="form-control" id="modalPrimerApellido" readonly>
                                </div>

                                <div class="mb-3">
                                    <label for="modalSegundoApellido" class="form-label">Segundo Apellido:</label>
                                    <input type="text" class="form-control" id="modalSegundoApellido" readonly>
                                </div>

                                <div class="mb-3">
                                    <label for="modalEmail" class="form-label">Email:</label>
                                    <input type="text" class="form-control" id="modalEmail" readonly>
                                </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <!-- Puedes agregar aquí un botón de "Guardar" o "Actualizar" si es necesario -->
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `;

        contentWrapper.innerHTML = navBar;

        // Define las URLs correspondientes a cada opción
        const urlsPorOpcion = {
            'logout': '/logout',
            'colaborador': 'inicio.html',
            'clasificador': 'clasificador.html',
            'diseñador': 'disenador.html',
            'administrador': 'gestionUsuario.html'
        };

        // Agrega eventos de clic a los elementos del menú
        Object.keys(urlsPorOpcion).forEach((opcionId) => {
            const elementoOpcion = document.getElementById(opcionId);
            if (elementoOpcion) {
                elementoOpcion.addEventListener('click', () => {
                    const url = urlsPorOpcion[opcionId];
                    if (url) {
                        window.location.href = url;
                    }
                });
            }
        });


        // Agregar evento de clic para abrir el modal de perfil de usuario
        const perfilUsuarioElemento = document.getElementById("perfilUsuario");
        if (perfilUsuarioElemento) {
            perfilUsuarioElemento.addEventListener('click', () => {
                // Actualizar el contenido del formulario con la información del usuario
                document.getElementById('modalNombreUsuario').value = perfilUsuario.nombre
                document.getElementById('modalPrimerApellido').value = perfilUsuario.ape1
                document.getElementById('modalSegundoApellido').value = perfilUsuario.ape2
                document.getElementById('modalEmail').value = perfilUsuario.email

                document.getElementById('modalFotoUsuario').src = perfilUsuario.foto
                console.log(perfilUsuario.foto)


                // Abrir el modal
                const perfilUsuarioModal = new bootstrap.Modal(document.getElementById('perfilUsuarioModal'))
                perfilUsuarioModal.show();
            });
        }


    } catch (error) {
        console.error('Error al obtener información del usuario:', error);
    }
};

const rolesRutas = () => {
    const roles = JSON.parse(sessionStorage.getItem('roles'))
    roles.forEach((rol) => {
        const elementoRol = document.getElementById(rol.toLowerCase());
        if (elementoRol) {
            elementoRol.addEventListener('click', () => {
                const url = `/${rol.toLowerCase()}`;
                console.log(url);
                window.location.href = url;
            });
        }
    });
}

rolesRutas()
crearNavegacion();
