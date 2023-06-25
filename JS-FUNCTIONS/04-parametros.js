function parametros(a, b , c){
    console.log(a, b, c)
}
parametros(1, 2, 3)

parametros(1, 2, 3, 4, 5)
parametros(1, 2, 3, 4, )
parametros(1, 2, 3,)
parametros(1, 2,)
parametros(1,)

function parametros2(a, b , c){
    console.log(a=4, b=5, c=6)
}
parametros2(1, 2, 3)

parametros2(1, 2, 3, 4, 5)
parametros2(1, 2, 3, 4, )
parametros2(1, 2, 3,)
parametros2(1, 2,)


function soma (...nums){
   let total = 0 
   for (let n of nums){
       total += n
   } return total
}
console.log(soma(1,2,3,4,5))
