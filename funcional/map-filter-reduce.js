/*Calculando a media somente de bom estudantes*/
const stundent = [
    { name: 'Tales', score: 6.4 },
    { name: 'camily', score: 8.6 },
    { name: 'Gabriel', score: 9.4 },
    { name: 'Alex:', score: 9.1 }
]
const bonsEstudantes = stundent =>stundent.score >=9
const meloresNotas = elemento => elemento.score

const avg =(acumulador, elemento, indece, Array) =>{
    if(indece === Array.length -1){
        return (acumulador + elemento) / Array.length
    }else{
        return acumulador + elemento
    }
}
console.log(
    stundent
    .filter(bonsEstudantes)
    .map(meloresNotas)
    .reduce(avg)
)