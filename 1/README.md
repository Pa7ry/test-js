# Test 1

Para responder a este test encontrarás un archivo llamado `test.js` en esta 
misma carpeta donde hay un pequeño fragmento de código que deberás analizar 
y responder a las siguientes cuestiones. 

1. En el fragmento de código de nuestro archivo (`test.js`) podemos encontrar
 hasta 3 variables. ¿Podrías decirnos cuál sería el valor de todas ellas al 
 finalizar la ejecución del script?

Despúes de la ejecución los valores serían:

```js
var rgb = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
    white: "#FFFFFF",
    black: "#000000"
}

var wb = {
    white: "#FFFFFF",
    black: "#000000"
};

var colors = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
    white: "#FFFFFF",
    black: "#000000"
}
```

Porque Object.assign modifica el primer objeto que se le pasa como parámetro añadiéndole los siguientes y
retorna el primer objeto.

2. Modifica el código para que las variables `rgb` y `wb` mantengan sus valores 
iniciales y `colors` tenga los valores de ambas al finalizar la ejecución del 
script.

Pasaría como primer parámetro del Object.assign un objeto vacío:
```js
    var colors = Object.assign({}, rgb, wb);
```
o utilizaría spread operator: 
```js
    var colors = {...rgb, ...wb}
```

3. Además, tenemos un bug localizado en dispositivos con Internet Explorer… 
El código de nuestro script no funciona y necesitamos que se ejecute también 
en este navegador. ¿Sabrías identificar cuál es el problema? ¿Qué solución nos
 propones?

**PS**: No es estrictamente necesario tener Internet Explorer para poder identificar y/o resolver el bug. 

El problema es que IE no soporta ES6, por lo que ni Object.assign, ni spread operator
sirven. Por lo tanto, planteo las siguientes opciones:

1. Una función que replique la funcionalidad que necesitamos. En este caso, podemos pasar
como parámetros de la función todos los objetos que queramos concatenar, los cuales recoge
*arguments*.

```js
    function mergeObjects() {
        var obj = {};
        for (var i = 0; i < arguments.length; i++)
            for (var x in arguments[i])
            obj[x] = arguments[i][x];
        return obj;
    }
```
2. Usar algún polyfill que aporte dicha funcionalidad.
3. Usar un transpilador de código como Babel.
