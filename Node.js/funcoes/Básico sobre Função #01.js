//Declaração de função -- Function Declaration
var n = 4
console.log(n)

function bomDia() {
    console.log('Bom Dia!')
}
bomDia()

// Função Expresão -- Function Expression
//Aqui estou declarando uam vareavel que vai receber uma função.
//essa funçao nao retorna nada.
const boaTarde = function() {
    console.log('Boa Tarde!')
}
boaTarde()


//Agora vou chamar uma função que retorna parametros a e b
function somar (a , b, c, d=0) {
    return a + b + c + d
}
const resultado = somar(54,24,34,58,95,4)// posso passar mais parametros que ele vai iguinora porque so estou chamando (a,b)se eu quizer posso adcionar mais parametros (a,b,c,d) tambem posso passa um parametro com um valor padrao adcionando o valor no parametro.(d = 0)
console.log(resultado)
