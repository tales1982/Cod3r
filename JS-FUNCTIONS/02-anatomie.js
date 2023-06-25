//Anonymous function
(function (a, b, c) {
    return a + b + c
})
// fuction expresion estou declarando uma funcao sem nome
let soma = function (a, b) {
    return a + b
}

let resultado = soma(7, 59)
console.log(resultado)

let outrasoma = soma
console.log(outrasoma(5, 9))

outrasoma = soma
console.log(outrasoma(11, 16))

const valor1 = function(n){
    return n + 3
}
console.log(valor1(8))

const valor3 = n => {
    return n + 1
}
console.log(valor3(24))

const valor4 = n => n +1
console.log(valor4(27))

const valor5 = (a, b) => a + b
console.log(valor5(3, 8))