# Como manejar la asincronia

## [Promesas](./Promises.js)
* > Para hacer uso de las promesas debemos crear una funcion la cual retorne una instancia de una promesa, esta va a recibr uns funcion con dos parametros `resolve` y `reject`.

    * >`resolve`: se va  encargar de ejecutar las funciones que ejecutar las funciones que deseemos anidar con el metodo `.then()`.

    * >`reject`: en caso de que la promesa no pueda ser resuelta, reject se va a encargar de retornar el error, este lo podemos manejar por medio de un `catch()` al final del `then()`.

## [Async Await](./Async_await.js)
* > Asyn await es azucar sintactica, esta sintaxia tiene como funcion hacer parecer que nuestro codigo asincrono paresca sincrono.

* > Para poder hacer uso de `await` este debe estar dentro de una funcion `async`.
    * >`await`: se emplea cuando hacemos llamados a funciones asyncronas.