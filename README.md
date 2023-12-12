# Reto 2 - Joyería Informática
 ## 🧩 Introducción al proyecto
Este proyecto se centra en el desarrollo de una aplicación web de creación de joyas a partir de componentes de ordenadores ya en desuso. El objetivo del proyecto es aprender a realizar una aplicación web desde cero juntando la parte del servidor y del cliente para finalmente con la interfaz poder mostrar y gestionar los datos relacionados con el sistema.

## 🛠️ Requisitos
- Tener instalado y configurado XAMPP.
- Tener instalado composer para poder trabajar con Laravel
- Visual Studio Code con la extensión Live Preview de Microsoft.

## 🏛️ Tecnologías empleadas
- **Frontend**: HTML, Bootstrap 5, SASS, JavaScript
- **Backend**: Laravel

## 🤔 Puesta en marcha de la aplicación
Para instalar las dependencias necesarias en la parte del frontend usaremos el siguiente comando:
```
npm install
```
Para ejecutar el script de construcción definido en el archivo `package.json` usaremos el siguiente comando:
```
npm run build
```
Para reconstruir el proyecto en la parte del backend es necesario usar los siguientes comandos:
```
composer install
composer update
```


## 💻 Definición de las rutas de la API REST
### Rutas para todos los usuarios
- `GET /perfil`: Con esta ruta los usuarios podrán obtener sus datos de perfil tales como el nombre o el email.
- `GET /roles`: Con esta ruta se averigua que roles tiene un usuario.
- `POST /login`: Con esta ruta los usuarios pueden iniciar sesión en su cuenta.
- `POST /registrar`: Con esta ruta los usuario pueden registrarse en el sistema si aún no tienen cuenta.

### Rutas para los colaboradores
- `GET /lotes`: Con esta ruta los usuarios colaboradores podrán obtener una lista de todos los lotes que han enviado.
- `POST /lotes`: Con esta ruta los usuarios colaboradores podrán obtener añadir un nuevo lote.
- `DELETE /lotes`: Con esta ruta los usuarios colaboradores podrán eliminar un lote.

### Rutas para los clasificadores y los administradores
- `GET /componente`: Con esta ruta se obtiene la lista de todos los componentes.
- `POST /componente`: Con esta ruta se agrega un componente al sistema.
- `PUT /componente`: Con esta ruta se actualiza un componente.
- `DELETE /componente/{id}`: Con esta ruta se elimina un componente dada su id.

### Rutas para los clasificadores
- `GET /lotesNoClasificados`: Con esta ruta los clasificadores obtendran una lista de los lotes que aún no han sido clasificados.
- `POST /despiece/{id}`: Con esta ruta un clasificador podrá despiezar un lote.
- `PUT /despiece/{id}`: Con esta ruta un clasificador podrá modificar el estado de un lote para que esté clasificado.

### Rutas para los administradores
- `GET /usuarios`: Con esta ruta se obtiene la lista de todos los usuarios.
- `POST /usuarios`: Con esta ruta se agrega un usuario al sistema.
- `PUT /usuarios`: Con esta ruta se actualiza un usuario.
- `DELETE /usuarios/{id}`: Con esta ruta se elimina un usuario dada su id.

### Rutas para los diseñadores
- `GET /joya`: Con esta ruta se obtiene la lista de todas las joyas.
- `POST /joya`: Con esta ruta se agrega una joya al sistema.
- `PUT /joya`: Con esta ruta se actualiza una joya.
- `DELETE /joya/{id}`: Con esta ruta se elimina una joya dada su id.

- `GET /recetas`: Con esta ruta se obtiene la lista de todas las recetas.
- `POST /recetas`: Con esta ruta se agrega una receta al sistema.
- `PUT /recetas`: Con esta ruta se actualiza una receta.
- `DELETE /recetas/{id}`: Con esta ruta se elimina una receta dada su id.

- `GET /ingredientes`: Con esta ruta se obtiene la lista de todos los ingredientes.
- `GET /ingredientes/{id}`: Con esta ruta se obtiene la lista de ingredientes de una joya en específico dado su id.

- `POST /verificarComponentes`: Con esta ruta se verifica si en el sistema quedan los componentes necesarios para poder realizar una joya dados sus ingredientes.
- `POST /calcular`: Con esta ruta se calcula la cantidad de joyas del mismo tipo que se pueden fabricar dados sus ingredientes y teniendo en cuenta la cantidad de componentes que hay en el sistema.
- `POST /fabricar`: Con esta ruta se fabrica una joya aportando sus ingredientes para que estos puedan ser restados del inventario.
