# Trabajo Final

# HEROKU

### Crea una cuenta en Heroku, un servicio que proporciona hosting y PaaS en 
### el que se puededesplegar aplicaciones y servicios desarrollados por nosotros. 
### Es gratuito hasta un número determinado de peticiones (suficientes para probar nuestras prácticas).
###

## SUBIDA A HEROKU Y ENTREGA DE LA PRÁCTICA
### Antes del próximo lunes 15 deberás terminar el proyecto, subirlo a Heroku, añadir el 
### enlace a la aplicación funcionando en el README.md, etiquetar el último commit con la 
### etiqueta “v0.0” y subirlo a GitHub.
###

### Deploying to Heroku
### heroku login
### heroku create --stack cedar
### git push heroku master
### # añade el enlace a Heroku en README.md
### git commit -a -m "Enlace a aplicación desplegada en Heroku"
### git push -u origin master
### # etiquetamos el último commit con v0.0
### git tag -a v0.0 -m "Versión inicial"
### git push origin --tags
###

# CREAR Y CONFIGURAR LA APP EN HEROKU
### Ahora nos dirigimos a la página de Heroku y creamos una cuenta o 
### iniciamos sesión si ya la tenemos.

### Heroku al iniciar sesión nos muestra su dashboard, aquí haremos clic en New y luego
### en Create new app:
### En la sección Create New App colocamos un nombre a nuestra app, en este caso app-
### pcontrol, dejamos seleccionada la región United States -ya que es la más recomendable
### para el continente americano- y luego hacemos clic en el botón Create app:
### En la sección Deploy, hacemos clic en la opción GitHub, la cual nos mostrará nuestro
### usuario (si tenemos iniciada la sesión de GitHub en el navegador), luego colocamos
### unas cuantas letras del nombre de nuestro repositorio y hacemos clic en Search:
### Nos aparecerán los repositorios que tengan coincidencia con la búsqueda,
### seleccionamos panel-control y hacemos clic en connect.
### Luego, seleccionamos la rama de github que queremos sincronizar con nuestra
### aplicación Heroku, en este caso master, y hacemos clic en Enable Automatic Deploys,
### así cada vez que se haga una modificación a esta rama, Heroku va actualizar
### automáticamente la aplicación:
### Finalmente, para completar la sincronización, hacemos clic en el botón Deploy Branch.
### Este paso se hace una sola vez si hemos habilitado la opción para deploys
### automáticos:
### Ahora, nos dirigimos a Settings y hacemos clic en el botón Reveal Config Vars. Aquí
### vamos a configurar nuestras variables de entorno, es decir, las que están en el
### archivo .env:
### De momento vamos a configurar solo estas variables:
### De momento vamos a configurar solo estas variables:
### Nota que hemos agregado la variable de entorno REDIRECT_HTTPS=true para habilitar la
### redirección automática a HTTPS.