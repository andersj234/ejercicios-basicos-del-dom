let nombre =window.prompt('como te llamas');
let edad =parseInt(window.prompt('cuantos años tienes'));
/*if(edad >=18){
    document.getElementById("cosas").innerHTML =`Hola ${nombre}, eres mayor de edad` 
}
else{
    document.getElementById("cosas").innerHTML =`Hola ${nombre}, eres menor de edad`
}*/

switch(edad){
    case edad >= 18: document.getElementById("cosas").innerHTML =`Hola ${nombre}, eres mayor de edad`;
    break;
    case edad < 18: document.getElementById("cosas").innerHTML =`Hola ${nombre}, eres menor de edad`;
    break;
    default:
        document.getElementById("cosas").innerHTML =`vuelve a introducir tu edad`

}

//edad >=18 ? document.getElementById("cosas").innerHTML =`Hola ${nombre}, eres mayor de edad`: document.getElementById("cosas").innerHTML =`Hola ${nombre}, eres menor de edad`;