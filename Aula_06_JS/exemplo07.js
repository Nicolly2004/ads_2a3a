 // declara classe e construtor de livro,  com o nome, preço e um método de calculo de porcentagem de desconto com o valor que o usuário quiser

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
}

var obj_livro1  = new Livro ("Use a cabeça java",150);
var obj_livro2  = new Livro ("Use a cabeça C#",180);

var lista = [];
lista.push(obj_livro1);
lista.push(obj_livro2);

console.log(lista[0]);
console.log(lista[1]);
