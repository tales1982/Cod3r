//Maneira tradicional
function dobro(a){
   return a * 2
}

console.log(dobro(15))

//1° exemplo de arrow
dobro2 = (a) => {
    return a * 2
}

console.log(dobro2(30))

//2° exemplo mais simplificado ainda retiro as chaves e colchetes e o return obs so posso ter um parâmetro
dobro3 = a => 2 * a 
console.log(dobro3(45))
//posso chamar também outra funções do tipo protótipos exemplo
console.log(dobro3(Math.PI))//to chamando o dobro do PI o PI == 3.14...
