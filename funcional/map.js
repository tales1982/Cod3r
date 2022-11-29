const numbers = [1, 2, 3, 4, 5, 6]

const numbersv2 = numbers.map(function (elemento) {
    return elemento * 2
})
//console.log(numbersv2)
//usando o elemento .map para dobra os numeros do array.


let numeros = [1, 2, 3, 4, 5, 6, 7];
let numerosv2 = numeros.map(ele => ele * 3)//usando o arrow pra simplificar
//console.log(numeros,numerosv2)//aqui estou chamando meu array original e o alterado
//aqui estou multiplicando meu vetor (array[1,2,3,4,5,6,7] * 3) usand a funcao arrow

const stundent = [
    { name: 'Tales', score: 6.4 },
    { name: 'camily', score: 8.6 },
    { name: 'Gabriel', score: 9.4 },
    { name: 'Alex:', score: 9.3 }
]
const getscore = el => el.score
console.log(stundent
    .map(getscore))//Aqui eu estou pegando somente os resultados das notas
    //.map(Math.ceil))-----//.map(Math.ceil) serve para arredondar as notas pra cima.
//Tambem posso arredondar para baixo usando .map(Math.floor)

