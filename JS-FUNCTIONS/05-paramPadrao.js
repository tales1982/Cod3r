//estrategia 1 para gerar valores padrão

function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(), soma1(5), soma1(1,5,3), soma1(0,0,0))//o unico ploblema aqui e quando eu passo o valor 0 ele calcula como false e passa o valor pre definido 1, 1, 1.

//Estrategia 2, 3, e 4 

function soma2(a, b, c){
    a = a !== undefined ? a : 1 //Estrategia 2
    b = 1 in arguments ? b : 1 // Estrategia 3
    c = isNaN(c) ? 1 : c // Estrategia 4
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0))

//Agora temos uma maneira muito mais facil para pre definir um valor no novo ecma script
//NOVO METODO.
function soma3(a = 1, b = 1, c = 1 ){
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0));