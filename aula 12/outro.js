var produto1 = {

    nome : "Coca cola",
    categoria : "Bebidas",
    quantidade : 30,
    tamanhos : ["200ml","Lata","600ml","2L"],
    //Criação de método interno
    descricao: function(){
        console.log("O produto", this.nome ,"é da categoria", this.categoria)

    },
    verTamanhos : opcoes
}

var produto2 = {

    nome : "Salgado",
    categoria : "Comida",
    quantidade : 10,
    tamanhos : ["Pequeno", "Médio", "Grande"],
    descricao: function(){
        console.log("O produto", this.nome ,"é da categoria", this.categoria)

    },
    verTamanhos : opcoes
}
/*
produto1.descricao()
produto2.descricao()
*/
function opcoes(){
    /*
    let tmhs = ""
    for(var i in this.tamanhos){
        tmhs += this.tamanhos[i] + ","
    }
    console.log("As opções são:", tmhs);
    */
   console.log("As opções:", this.tamanhos.toString());
   
}

produto1.verTamanhos()

produto2.verTamanhos()

//Crie um terceiro produto, pedindo as informacoes do mesmo, para o usuario atraves do prompt








    
