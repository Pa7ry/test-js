# Test 2

El fragmento de código de nuestro fichero `test.js` nos devuelve un output no 
deseado. Queremos imprimir un valor incremental a cada segundo pero lo que 
nos devuelve el código es el mismo valor en cada iteración. 

1. Sin necesidad de ejecutar el código, ¿sabrías decirnos qué valor imprimiría
 por consola el script? ¿Cuál es el motivo?

 Imprimiría un 5.

 La función se ejecuta de la siguiente manera:
 1. i se declara como var, por lo que es una variable del scope global
 2. setTimeOut es una función asíncrona, por lo que en este caso se ejecuta al terminar el ciclo for
 3. cuando el ciclo for termina, el valor de i es 4
 4. cuando el setTimeOut se ejecuta i es 4 y siguiendo la iteración hace un i++, que es 4 + 1, por lo que imprime 5

2. Sabiendo que el output que buscamos es el que encuentras bajo estas líneas… 
¿Cómo solucionarías el fragmento de código para que el output sea el deseado?

```
    > 0
    > 1
    > 2
    > 3
    > 4
```

Lo solucionaría de la siguiente manera para que imprimera cada iteración con un segundo de diferencia

```js
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i*1000)
}
```