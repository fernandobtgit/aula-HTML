var idade1 = prompt("Qual sua idade?")
var idade2 = prompt("Qual sua idade?")

var valorfinal = 0

if(idade1 < 18){
    valorfinal = valorfinal = 15
}
else if(idade1 < 60){
    valorfinal = valorfinal +30
}
else{
    valorfinal = valorfinal + 20
}

if(idade2 < 18){
    valorfinal = valorfinal = 15
}
else if(idade2 < 60){
    valorfinal = valorfinal +30
}
else{
    valorfinal = valorfinal + 20
}


console.log("Valor final: ", valorfinal);
