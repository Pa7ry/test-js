# Test 3

En este caso, tenemos un código usando el objeto `Promise` (Promesa). Las *promises* 
(promesas) nos permiten manejar situaciones asíncronas en nuestras ejecuciones, 
pero tenemos un pequeño problema… No es una solución totalmente cross-browser. 
Sabemos que no funciona en Internet Explorer así que nos gustaría saber cómo 
modificarías nuestro código (`test.js`) para que funcione correctamente.

La solución más eficiente sería instalar una librería de promesas como bluebird,
que reemplaza las promesas por la funcionalidad equivalente y pasar el resto del
código del script a ES5.

Obviamente, también está la opción de replicar el funcionamiento de las promesas con
código en ES5, pero considero que es una opción demasiado costosa, sobre todo, si
tenemos en cuenta que hay varias librerías que se encargan de solucionar estos problemas.

Otra solución sería usar un transpilador de código como Babel, que transforma
a ES5 cualquier versión de ECMAScript.