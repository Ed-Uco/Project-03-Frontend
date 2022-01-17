# Frontend Proyecto Library
Esta es la parte visual del proyecto, de la misma manera que su contraparte (Backend) cuenta con el CRUD completo utilizando React e interactuando con los datos haciendo uso de Axios para ello.
Este proyecto es la finalización del bootcamp haciendo uso de las tecnologías de desarrollo web más utilizadas en la actualidad en el mercado.


A continuación, se describe las diferentes secciones de la aplicación:
* Home 🏠
* Libros 📖
* Crear cuenta 💻
* Iniciar sesión 😁
* Ver nuevos títulos 📚
* Cerrar sesión 🚪

## 🏠 Home 🏠

Es la sección principal la cual muestra el menú accesible para usuarios suscritos como para los no suscritos. 
Este menú se mantiene visible durante toda la navegación de la aplicación.

## 👩‍💻 Crear cuenta 👩‍💻

A través de esta página los visitantes pueden crear una cuenta de usuario para acceder al contenido. 
La aplicación cuenta con diferentes validaciones de correo electrónico y contraseña para la creación de un registro de usuario como el incluir letras mayúsculas, números, etc. 
Todo esto para que los visitantes tengan la garantía de seguridad en sus credenciales. 
Así mismo, la aplicación maneja un nivel mayor de seguridad con el encriptado de contraseña en la base de datos.

## 👩‍💻 Iniciar sesión 👩‍💻

Mediante esta pantalla es posible ingresar los datos de un usuario registrado o suscrito. 
Es necesario tener el nombre de usuario y contraseña con que el usuario se registró.
En caso necesario, cuenta con la opción de crear una cuenta de usuario nueva.
Al momento de entrar a la sesión, en la base de datos se crea una cookie que al cerrar la sesión se elimina.

## 😁 Perfil 😁

Esta página solamente es visible después de que el usuario accedió exitosamente a la aplicación y muestra la información general referente a las credenciales del mismo.
* Nombre
* Apellidos
* Correo electrónico
* Dirección
Esta sección también permite redireccionar al usuario a un formulario para poder editar su información.

## 📚 Libros 📚

Este menú nos permitirá observar la galería de los libros registrados, así como obtener información adicional de cada uno de ellos.
Esta sección también permite redireccionar al usuario a un formulario para poder editar su información como:

* Título
* Autor
* Páginas
* Imagen Portada
* Descripción
* Lenguaje
* Fecha de Publicación
* Editorial
* ISBN
* Categoría
* Cantidad de Libros

## 🚪 Log out 🚪

En la parte superior derecha se encuentra la opción de Cerrar sesión (solamente mostrado si el usuario se encuentra con una sesión iniciada), esto permitirá al usuario salirse del sistema.

El proyecto cuenta con los siguientes elementos en su desarrollo:

Modelos:
- Usuarios🙍‍♂️
- Libros📖


Tecnologías utilizadas:
- React
- Axios
- Tailwind
