
// Com array

var aluno = ["Pedro", "Tiago", "Barquinho"]
var media = [7, 8, 4]

console.log("O aluno", aluno[1], "teve média de", media[1])

// Criando um dicionario/objeto

var aluno1 = {

    nome : "Pedro",
    media : 7

}

var aluno2 = {

    nome : "Tiago",
    media : 8

}

//Acessa o objeto
console.log(aluno1)
//Acessa uma propiedade daquele objeto
console.log(aluno1.nome)
console.log(aluno2.media)

var carro = {
    modelo : "Corolla",
    marca : "Toyota",
    preco : 150000,
    cor : "Roxo"
}

console.log(carro)

// Acessando um valor passando uma chave
console.log(carro["marca"])

// Criando um objeto vazio

var garrafa = {}

garrafa.tamanhlo = "1 litro"
garrafa.material = "Vidro"
garrafa.cor = "Vermelho"
garrafa["marca"] = "Coca"

// Alterar uma propiedade já existente
garrafa.cor = "Branca"
garrafa["marca"] = "Topoué"
console.log(garrafa);

//var novaPropiedade = prompt("Nova propiedade")
//garrafa[novaPropiedade] = prompt("Digite o valor dessa propiedade")

//console.log(garrafa[novaPropiedade])

var animal1 = {

    nome : "Tom de moletom",
    especie : "Lagarto",
    raca : "Halls",
    andar : function(){
        console.log("andando");
    },

    fala: function(){
        console.log("Sibilo")
    }
}

animal1.andar()
