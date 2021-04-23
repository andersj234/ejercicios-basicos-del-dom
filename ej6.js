let operacion= window.prompt('indica la operación que desea realizar(Suma, Resta, Multiplicación, División o Resto').toLowerCase()

let num1=parseInt(window.prompt('escoge un numero'))
let num2=parseInt(window.prompt('escoge otro numero'))
if(operacion === 'suma'){
document.getElementById("cosas").innerHTML= `${num1+num2} es el resultado de sumar ${num1}+${num2}`
}
else if(operacion === 'resta'){
    document.getElementById("cosas").innerHTML= `${num1-num2} es el resultado de restar ${num1}-${num2}`
}
else if(operacion === 'multiplicacion'){
    document.getElementById("cosas").innerHTML= `${num1*num2} es el resultado de multiplicar ${num1}*${num2}`
}
else if(operacion === 'division'){
    document.getElementById("cosas").innerHTML= `${num1/num2} es el resultado de dividir ${num1}/${num2}`
}
else if(operacion === 'resto'){
    document.getElementById("cosas").innerHTML= `${num1&num2} es el resultado del resto ${num1}&${num2}`
}
else{document.getElementById("cosas").innerHTML= `No puedo realizar esta acción`}