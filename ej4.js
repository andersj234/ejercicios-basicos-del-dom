let nombre =window.prompt('como te llamas');
let edad =parseInt(window.prompt('cuantos años tienes'));

edad >=18 ? document.getElementById("cosas").innerHTML=`Hola ${nombre}, eres mayor de edad`: document.getElementById("cosas").innerHTML= `Hola ${nombre}, eres menor de edad`;

document.getElementById("cosas").style.backgroundColor ="red"

if(edad >=18){
    document.getElementById("cosas").style.backgroundColor ="red"
    document.getElementById("cosas").innerHTML =`Hola ${nombre}, eres mayor de edad` 
}
else{
    document.getElementById("cosas").style.backgroundColor ="green"
    document.getElementById("cosas").innerHTML =`Hola ${nombre}, eres menor de edad`
}