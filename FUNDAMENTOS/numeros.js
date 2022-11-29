/*const peso1 = 1.0
const peso2 = 1.5
const peso3 = Number("2.2")

console.log(peso1,peso2,peso3)
console.log(Number.isInteger(peso1))// para saber se o valor de peso1 e inteiro ou nao (inteiro(true))
console.log(Number.isInteger(peso2))//inteiro ou flutuante (flutuante(false))quando o numero e fracionado
console.log(Number.isInteger(peso3))*/

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1*avaliacao2
console.log(total)// mostra o numero completo (quebrado) 67.823641....
console.log(total.toFixed(2))// usando o .toFixed defino quantas casa quero mostra depois do. (67.(82))
console.log(total.toString(2))// transforma em binario
