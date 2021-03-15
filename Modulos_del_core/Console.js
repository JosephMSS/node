function fun1() {
    console.group('Fun 1')
    console.log("Esto es la funcion 1");

    fun2();
    console.groupEnd('Fun 1')

}
function fun2() {
    console.log("Esto es la funcion 2");
    console.group('Fun 2')
    console.log("Esto es la funcion 2");
    console.groupEnd('Fun 2')
    
}
fun1()