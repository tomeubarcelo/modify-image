/*  ********************************
 * @title Ejercicio modificar imagen
 * @version 0.0.1
 * @author Tomeu Barceló
 ******************************** */

/*
Hay que crear una funcionalidad en Javascript, para cuando el usuario pulse encima de una imagen de la web, 
esta aumente de tamaño y al volver a pulsar disminuya.
*/

const imgMallorca = document.getElementById('fotoMallorca');
var tamanyoReal = true; //boolean sobre el tamaño real de la foto

function clickImage() {
    console.log(tamanyoReal);
    if (tamanyoReal) { //si el tamaño real es true
        imgMallorca.style.width = "50%";
        tamanyoReal = false; //reducimos el tamaño y tamanyoReal pasa a ser false
    } else { //si es false
        imgMallorca.style.width = "100%";
        tamanyoReal = true; //aumentamos el tamaño y tamanyoReal pasa a ser true
    }
}