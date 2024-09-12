function MyFunctions (){
    console.log("Programa de Funciones")

    //Función que recibe un número y le suma uno.
    function fcnSumarUno(numero, fcnResultadoCallBack){
        setTimeout(function(){
            fcnResultadoCallBack(numero+1);
        }, 800);
        // return numero + 1;
    }
    //Llamar la función
    let Resultado = fcnSumarUno(5, function(nuevoValor1){
        //Desplegar el resultado en consola
        console.log("Resultado: ", nuevoValor1);
        fcnSumarUno(nuevoValor1, function(nuevoValor2){
            console.log("Resultado: ", nuevoValor2);
            fcnSumarUno(nuevoValor2, function(nuevoValor3){
                console.log("Resultado: ", nuevoValor3);
            })
        })
    });

    

    return (
        <>
            <div>
                <h1>
                    Programa de Funciones
                </h1>
            </div>
        </>
    )
}

export default MyFunctions