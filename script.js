/* 1- Por un lado habrás de crear una variable cargador donde habrá de 
guardar unos 7 "pium!" */
let cargador = ["pium!", "pium!", "pium!", "pium!", "pium!", "pium!", "pium!"];

/*2- El otro elemento será nuestra chauchat, que "hace cosas", y será 
donde pondremos el cargador para que haga cosas.

chauchat(cargador)

Cuando ejecutemos dicho código, veremos impresos todos los "pium!" 
del cargador, uno tras otro.

En el caso de 3 "pium!" en el cargador, veremos en la consola: */

//Primera parte
/*function chauchat(cargador){

    for (const disparo of cargador) {
        console.log(disparo);
    }

}*/

/*3- Al tener el cargador abierto, era posible que se bloquease si algo 
entraba, como una "ramita".

Digamos que existe un 80% de probabilidad de que se quede "pillada":

Si se queda pillada, no habrá tiros y sólo mostrará un mensaje: "Illo,
me he quedao pillá!"
En este enlace sabrás cómo generar números aleatorios: Math.random()*/
//Segunda parte
/*function chauchat(cargador) {

    let random = Math.round();

    if (random < 0.8) {
        console.log("Illo, me he quedao pillá!");
    } else {
        for (const disparo of cargador) {
            console.log(disparo);
        }
    }
}*/

/*4- Para evitar que se caliente y se bloquee, cada 3 disparos se 
imprimirá un espacio: */

function chauchat(cargador) {

    let random = Math.round();

    if (random < 0.8) {
        console.log("Illo, me he quedao pillá!");
    }

    let contador = 0;
    for (const disparo of cargador) {
        console.log(disparo);

        contador++;

        if (contador % 3 === 0) {
            console.log(" ");
        }
    }
}