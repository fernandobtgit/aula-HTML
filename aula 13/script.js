// Console- Terminal do navegador

console.log(console);

// Window - Janela do navegador
//window.alert("Sim")
//alert("Não")

// Document
console.log(document);
console.log(document.head);
console.log(document.body);

// Acessar elementos do body

// Pega elementos pela tag
var titulos = document.getElementsByTagName("h1")
console.log(titulos);

// Pega elementos pela class
var paragrafos = document.getElementsByClassName("para")
console.log(paragrafos);

// Pega elemento pelo id
var espe = document.getElementById("p3")
console.log(espe);

espe.style.backgroundColor = "red"
espe.style.color = "green"

//pego por class
paragrafos[0].style.backgroundColor = "pink"

//pego por tag
titulos[2].style.backgroundColor = "orange"

//Se quiser mexer em todos teria que colocar um for
//for(i = 0;i < 3 ;i++){
//    titulos[i].style.backgroundColor = "orange"}


function cliquei(){
    for(i = 0;i < 4;i++){
        console.log("Auto destruição em - "+i);
        
    }
    console.log("MORREU!");
    
}

// Crie um botao que altere todos os titulos pra verde, e aumente a fonte para 100px

function clicarei(){
    for( var i = 0;i < 3 ;i++){
        titulos[i].style.backgroundColor = "green"
        titulos[i].style.fontSize = "100px"
        
    }
    console.log("VOCE APERTOU O VERDE");
}
