//declarando uma função anonima
//Quando uma função e anonima toda veis que eu quiser executar tenho que colocar ela em uma variável

const soma = function(x, y){
    return x + y
}

const imprimirResultado = function (a, b, opercao = soma){
    console.log(opercao(a, b))
}

//Algumas maneira de executar minha função anonima.
imprimirResultado(3, 4)
imprimirResultado( 3, 4, soma)
imprimirResultado(3, 4, function(x, y){
    return x - y
})

imprimirResultado(3, 4, (x, y ) => x * y)//arrow


//posso também acessar um objeto com uma função anonima integrada acessando o atributo dela exemplo.

const pessoa = {
    falar: function(){
        console.log("ola")
    }
}
pessoa.falar()