//Function Declaration
//1° funcao que nao receber nenhum parametro, e nao retorna nada.
function sayhello(){
    console.log('Ola!')
}
sayhello()

//2°funcao que receber parametro , mais nao retorna nada.
function sayhelloto(name){
    console.log(`Ola ${name} bem vindo!`)
}
sayhelloto('Tales')

//3°funcao que nao receber nenhum parametro,mais retorma alguma coisa.
 function returnHi(){
     return 'OLA'
 }
 const saldacoes = returnHi()
 console.log (saldacoes)
 console.log (returnHi())

 //4° funcao que receber um parametro, e retorma alguma coisa.
 function returnHiTo(name){
     return`Hi ${name}!`
 }
 console.log(returnHiTo('TALES'))