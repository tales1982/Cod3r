// Usando o reduce para calcular a media

const numeros =[1,2,3,4,5,6]

const soma =(total,elemento) => total + elemento
const total= numeros.reduce(soma,100)
console.log(total)

const avg =(acumulador, elemento, indece, Array) =>{
    if(indece === Array.length -1){
        return (acumulador + elemento) / Array.length
    }else{
        return acumulador + elemento
    }
}

console.log(numeros.reduce(avg))