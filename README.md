# Reto 2 - Joyería Informática
 ## 🧩 Introducción al proyecto
Este proyecto se centra en el desarrollo de una aplicación web de creación de joyas a partir de componentes de ordenadores ya en desususo. El objetivo del proyecto es aprender a realizar una aplicación web desde cero juntando la parte del servidor y del cliente para finalmente con la interfaz poder mostrar y gestionar los datos relacionados con el sistema.

## 🛠️ Requisitos
- Tener instalado y configurado XAMPP.
- Tener instalado composer para poder trabajar con Laravel
- Visual Studio Code con la extensión Live Preview de Microsoft.

## 🏛️ Tecnologías empleadas
- **Frontend**: HTML, Bootstrap 5, SASS, JavaScript
- **Backend**: Laravel

## 🤔 Puesta en marcha de la aplicación

## 💻 Definición de las rutas de la API REST
### Rutas para todos los usuarios
- `GET /perfil`: Con esta ruta los usuarios podrán obtener sus datos de perfil tales como el nombre o el email.
- `GET /roles`: Con esta ruta se averigua que roles tiene un usuario.
- `POST /login`: Con esta ruta los usuarios pueden iniciar sesión en su cuenta.
- `POST /registrar`: Con esta ruta los usuario pueden registrarse en el sistema si aún no tienen cuenta.

### Rutas para los lotes
- `GET /lotes`: Con esta ruta los usuarios colaboradores podrán obtener una lista de todos los lotes que han enviado.
- `POST /lotes`: Con esta ruta los usuarios colaboradores podrán obtener añadir un nuevo lote.
- `DELETE /lotes`: Con esta ruta los usuarios colaboradores podrán eliminar un lote.
