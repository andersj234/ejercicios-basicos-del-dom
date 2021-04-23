let num1 = parseInt(window.prompt('escoge un numero'))
let num2 = parseInt(window.prompt('escoge otro numero'))

let suma=document.getElementById("cosas").innerHTML=`${num1+num2}` 
document.getElementById("cosas").style.backgroundColor="grey"
document.getElementById("cosas").style.color="white"

let resta= document.getElementById("cosas1").innerHTML=`${num1-num2}` 
document.getElementById("cosas1").style.backgroundColor="orange"
document.getElementById("cosas1").style.color="black"

let multi=document.getElementById("cosas2").innerHTML=`${num1*num2}` 
document.getElementById("cosas2").style.backgroundColor="green"
document.getElementById("cosas2").style.color="blue"

let division=document.getElementById("cosas3").innerHTML=`${num1/num2}` 
document.getElementById("cosas3").style.backgroundColor="yellow"
document.getElementById("cosas3").style.color="red"



let resto=document.getElementById("cosas4").innerHTML=`${num1%num2}` 
document.getElementById("cosas4").style.backgroundColor="blue"
document.getElementById("cosas4").style.color="grey"


    

