//a funçao Filter vai retorna sempre um valor booleano verdadeiro ou falso (true and false).

const numbers = [1, 2, 3, 4, 5, 6]

const stundent = [
    { name: 'Tales', score: 6.4 },
    { name: 'camily', score: 8.6 },
    { name: 'Gabriel', score: 9.4 },
    { name: 'Alex:', score: 9.3 }
]
const alunoAprovados = elem => elem.score
    
if (alunoAprovados >= 8){
    console.log('Aprovado')
}else{
    console.log('Reprovado')
}
