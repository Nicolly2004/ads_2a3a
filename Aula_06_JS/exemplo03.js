// declara classe e construtor de livro,  com o nome, preço e um método de calculo já determinado

class Livro {
    constructor(pNome,pPreco){
        this.Nome =  pNome;
        this.Preco = pPreco;
    }

    get Nome(){
        return this.Nome;
    }

    set Nome(pNome){
        this.nome = pNome;
    } 

    get Preco(){
        return this.Preco;
    }

    set Preco(pPreco){
        this.preco = pPreco;
    }

    calcularDesconto(){
        this.preco = this.preco - 10;
    }
}

var obj_livro1  = new Livro ("Use a cabeça java",100);
obj_livro1.calcularDesconto();
console.log("O livro: " + obj_livro1.nome + " custa " + obj_livro1.preco + " reais ");