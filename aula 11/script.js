console.log("Salve,rapaziada")

alert("Testando aqui pra ver se vai")

var nome = "Cristiano"
var numero = 7
var pulo = 2.10
var theBest = true


console.log("O nome:" + nome)
console.log("De número",numero)
console.log(pulo)
console.log(theBest)

console.log(typeof(nome))
console.log(typeof(numero))
console.log(typeof(pulo))
console.log(typeof(theBest))

var nulo = null
var indefinido = undefined

console.log(typeof(nulo))
console.log(typeof(indefinido))

// OPERADORES ARITIMETICOS
//+,-,*,/,%

var a = 10, b = 5

console.log("Soma:", a + b)
console.log("Subtração:", a - b)
console.log("Multi:", a * b)
console.log("Div:", a / b)
console.log("Módulo:", a % b)

// OPERADORES LÓGICOS
// E , OU , NÃO


var verdade = true
var mentira = false

console.log(verdade && mentira);

console.log(verdade || mentira);

console.log(verdade && !mentira);

// OPERADORES REALCIONAOIS
//>,<,>=,<=,==,===,!==

var x = 65, y = 32 , z = "65"

console.log(x > y)
console.log(x < y)
console.log(x >= y)
console.log(x <= y)
console.log(x == y)
console.log(x != y)
console.log(x === z);
console.log(x !== z);

// Interagir com o usuário

var time = prompt("Digite seu clube do coração")

console.log(time);

// DESVIOS CONDICIONAIS

var estarVIVO = true

if(estarVIVO == true){
    console.log("Você está vivo");
    

}
else if(estarVIVO == false){
    console.log("Estás muerto 🐐");
    
}
else{
    console.log("Você não ta nada")
}


// SWITCH = ESCOLHA

var camisa = "Laranja"

switch(camisa){
    case "Azul":
        console.log("Ganhou um voucher");
    break
    case "Branco":
        console.log("Ganhou um play 5");
    break
    case "Vermelho":
        console.log("Ganhou uma ferrari");
    break
    default:
        console.log("Camisa inválida");
    break    
}

// LOOP
// FOR = PARA

for(var i=0; i<5 ; i++){
    console.log("Estoy aca");
    

}
console.log("ACABOI");

//WHILE = ENQUANTO

var c = 1
while(c < 10){

    console.log("ALAN PATRICK MELHOR DO PLANETA");
    c++
}

// FUNÇÕES

function cleber(){
    console.log("CLEBER.");
}

cleber()

function roger(parametro){
    console.log("ROGER.",parametro);
    

}

roger("roger,")



function calculo(n1,n2){
    let resultado = n1 + n2
    return resultado
}

var final = calculo(3,5)

console.log(final);



