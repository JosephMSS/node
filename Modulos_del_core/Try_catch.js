//#region Errores en el hilo principal
function err() {
    return 1+z;
}

try {
    err()
} catch (error) {
    console.error(error.message);
}
//#endregion Errores en el hilo principal

//#region Errores asincronos
function err2() {
    setTimeout(() => {
        return 1+z;
    }, 1000);
}

// try { //La aplicacion se cae completamente
//     err2()
// } catch (error) {
//     console.error(error.message);
// }
//#endregion Errores en el hilo principal

//#region Manejo de Errores asincronos
function err3() {

        setTimeout(() => {
            try {
                return 1+z;            
            } catch (error) {
                console.log('Mori');
                console.error(error.message);
                console.log('...pero sobrevivi');
            }
        }, 1000);
    
}

try { //La aplicacion se cae completamente
    err3()
    console.log('siuuu');
} catch (error) {
    console.error(error.message);
}
//#endregion Errores en el hilo principal