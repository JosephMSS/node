# Entender los modulos  del Core
## [Globals](./Globals.js)
* > En Node tenemos el objeto **global** el cual contiene los metodos  y propiedades basicas que usamos.
 * >Algunos de los metodos que incluye el objeto global son:
    * `setTimeOut`:LLama a una funcion despues de un tiempo determinado.
    * `setInterval`:LLama a otra funcion daca intervalo de tiempo.
    * `clearTimeOut`: detiene el `setTimeOut`
    * `setImmediate`: equivalente a `setTimeOut` pero con un tiempo de ejecusion de 0.
    * `clearInterval`: detiene el setInterval.

## [File System](./File_System.js)
>`__dirname`:Nos da la ruta del directorio actual.
### Importacion de modulos
> Para importar modulos de node los debemos guardar en una constante y ademas emplear el `require([nombre del modulo])`.
### Modulo FS
>Lo importamos por medio de `require('fs')`.

>Con este modulo podemos escribir, leer y eliminar archivos.

>Funciones:
* `readFile`:Este recibe como parametro  la ruta y una callback en donde podemos ver los errores y los datos del archivo.
* `writeFile`: recibe una ruta, contenido y el callback.
* `unlink`: recibe una ruta y el callback.

## [Console](./Console.js)
* >`console.log`: recibe cualquier tipo y lo muestra en el consola.
* >`console.info`: es equivalente a log pero es usado para informar.
* >`console.error`: es equivalente a log pero es usado para errores.
* >`console.warn`: es equivalente a log pero es usado para warning.
* >`console.table`: muestra una tabla a partir de un objeto.
* >`console.count`: inicia un contador autoincremental.
* >`console.countReset`: reinicia el contador a 0.
* >`console.time`: inicia un cronometro en ms.
* >`console.timeEnd`: Finaliza el cronometro.
* >`console.group`: permite agrupar errores mediante identación.
* >`console.groupEnd`: finaliza la agrupación.
* >`console.clear`: Limpia la consola. 