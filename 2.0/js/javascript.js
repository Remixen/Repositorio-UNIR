//declaramos las variables a usar
var palindromo;
var numeroUno;
var numeroDos;
var vocal;

//si una palabra es palindromo
function EsPalindromo(palindromo) {
    //tomamos el valor del input recibido del html
    palindromo = document.getElementById('palindromo').value;
    //split: separa la cadena en un arreglo
    //reverse lee la cadena de fin a inicio
    //join une la cadena
    //validamos si la cadena se es igual al derecho y al reves
    if (palindromo.split('').reverse().join('') == palindromo) {
        alert('es palindromo');
    } else {
        alert('no es palindromo');
    }
}

//definir que numero es mayor
function EsMayor(numeroUno, numeroDos) {
    numeroUno = document.getElementById('numeroUno').value;
    numeroDos = document.getElementById('numeroDos').value;
    //validamos si las cadenas recibidas son mayores o iguales
    if (numeroUno > numeroDos) {
        alert('el numero ' + numeroUno + ' es mayor');
    } else if(numeroDos > numeroUno) {
        alert('el numero ' + numeroDos + ' es mayor');
    } else if (numeroUno === numeroDos){
        alert('Son iguales');
    }
}

//contar vocales en una cadena
function ContarVocales(vocal){
    vocal = document.getElementById('vocal').value;
    //creamos el contador de las vocales y contamos cuantas veces reemplazamos una vocal por un espacio en blanco
    //.length cuenta cantidad de veces que se realiza una accion o cantidad de parametros
    var contador = vocal.replace(/[^aeiouAEIOU]/g,'').length;
    alert('esta frase/palabra tiene: '+contador+' vocales');
}

function ObtenerVocales(vocal){
    vocal = document.getElementById('vocal').value;
    //remplazamos las vocales por espacios en blanco e imprimimos que parametros se remplazaron
    var vocales = vocal.replace(/[^aeiouAEIOU]/g,'');
    alert('esta frase/palabra tiene estas vocales: '+vocales);
}


  