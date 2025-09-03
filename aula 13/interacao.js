function troca(elementoquechamou){
    //console.log(elementoquechamou);
    let  textoNovo = elementoquechamou.value   

    let textoAntigo = document.getElementById("textoTrocar")

    textoAntigo.innerText = textoNovo
    
    console.log(textoNovo)
    

}
function trocaAgora(elementoquechamou){
    //console.log(elementoquechamou);
    let  textoNovo = elementoquechamou.value   

    let textoAntigo = document.getElementById("textoTrocarAgora")

    textoAntigo.innerHTML = textoNovo
    
    console.log(textoNovo)
    
}

function viraverde(elemento){
    elemento.style.color = "green"
    elemento.style.fontSize = "100px"

}

function viravermelho(elemento){
    elemento.style.color = "red"
    elemento.style.fontSize = "100px"
    
}

