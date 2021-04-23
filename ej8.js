let edad =parseInt(window.prompt('cuantos años tienes'))
let carnet =window.prompt('¿Tienes carnet de conducir?').toLowerCase()


if(edad >=18 && carnet ==='si'){
    var lugar = window.prompt('zona de recogida del coche')
    var dias =parseInt(window.prompt('Escoge la cantidad de dias que necesitas para alquilar el coche (recuerde que son 25 euros por dia'))
    var nombreApellido =window.prompt('Cual es tu nombre y tu apellido')
    var precio = dias*25
    document.getElementById("cosas").innerHTML =`Muy bien ${nombreApellido} ha escogido  ${dias} dias en total seran ${precio} euros`
    if(dias >7){ var precioSemana = (dias*25)-25 // tengo que pensar mas como hacerlo porque esto no me va a contar mas que una semana solo
    document.getElementById("cosas").innerHTML =`Muy bien ${nombreApellido} ha escogido  ${dias} dias en total seran ${precioSemana} euros`
}
}
else if(edad <18 || carnet === 'no'){
    document.getElementById("cosas").innerHTML =`no podra alquilar ningún vehiculo`
} 
else{'vuelve a introducir los datos una vez mas'}
