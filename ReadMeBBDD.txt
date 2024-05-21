											CASOS DE USO
		ACTORES

Para la realización del proyecto inicialmente sean planteado 5 casos de usos diferentes, para cada uno se han planteado la presencia 3 actores diferentes:

Los usuarios: Estos serán los actores por defecto y sus acción estarán limitadas a las funcionalidades básicas de la aplicación.
Los administradores: Estos se encargarán de gestionar la aplicación y que los usuarios cumplan con las normas, por lo que, aparte de las acciones de los usuarios, estos podrán realizar acciones adicionales como la eliminación de elementos
La base de datos: Este se encargará de recibir las peticiones del resto de actores para posteriormente enviar una respuesta a estas. Por lo general, la base de datos deberá acceder a todas las acciones.

		CASOS DE USOS

LOGIN
Tanto el usuario como el administrador podrán iniciar sesión y registrarse, sin embargo, el administrador tendrá un login una opción aparte para iniciar sesión para acceder a la vista de administrador. En cuanto a la opción de cerrar sesión, ambos podrán acceder a ella, sin embargo, la base de datos no será necesaria para esta opción.

GESTIÓN DE CUENTAS
Tanto el usuario como el administrador podrán comprobar sus datos (nombre, correo, …) y en caso de ser necesario también podrán modificarlos o eliminar la cuenta. A parte de esto, el administrador podrá eliminar las cuentas de cualquiera de los usuarios.

POST
Tanto el usuario como el administrador podrán ver los post que hayan sido publicados, también podrán crear nuevos post, y, en caso de ser necesario podrán modificarlos o eliminarlos. A parte de esto, los administradores podrán eliminar cualquier post que se haya publicado.

COMPRA Y VENTA
Tanto el usuario como el administrador podrán ver los articulos en venta, tambien podran subir articulos para venderlos, y, modificarlos o eliminarlos en caso de ser necesario. A parte de esto, los administradores podrán eliminar cualquier artículo que se haya puesto a la venta.

SISTEMA DE SEGUIDORES
Tanto el usuario como el administrador podrán seguir a otros usuarios y administradores, o dejar de seguirlos. También, podrán comprobar cuántos seguidores y a cuantas personas siguiendo tiene el mismo u otros.


											BASE DE DATOS

La base de datos de nuestra aplicación está formado por tres entidades : Usuarios, Productos, Posts. Los tres están relacionados de la siguiente manera: un Usuario puede vender uno o más Productos y un Producto puede ser vendido por uno o más Usuarios, un Usuario puede crear uno o varios Posts, pero un Post solo puede ser creado por un Usuario. Además, hay que indicar tres relaciones principales: vende, sigue, da likes.

La entidad Usuarios está formada por la clave primaria IdUsuario, por la clave foránea Fk_idPost y por los atributos: Teléfono, Icono, Correo, Nombre, Apellidos, Rol y Contraseña.

La entidad Posts está formada por la clave primaria IdPost y por los atributos: Titulo, Tipo, Descripción, Imágenes y Likes. 

La entidad Productos está formada por la clave primaria IdProducto, por las claves foráneas Fk_idComprador y Fk_idVendedor, y por los atributos: Nombre, Precio, Imagen, Descripción y Fecha. 

La relación Vende está formado por la clave primaria IdUsuarioProducto y por las claves foráneas Fk_IdUsuario y Fk_idProducto. 

La relación Sigue está formada por la clave primaria IdSeguidor y por las claves foráneas Fk_IdSeguidor y Fk_idSeguido. 

La relación Da Likes está formada por la clave primaria IdLike y por las claves foráneas Fk_IdUsuario y Fk_idPost. 



