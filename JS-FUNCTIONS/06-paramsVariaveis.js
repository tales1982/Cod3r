/*O objeto arguments é uma variável local disponível dentro de todas as funções. Você pode referenciar os argumentos de uma função dentro da função usando o objeto arguments. Esse objeto contém um registro para cada argumento fornecido para a função, com o índice do primeiro registro começando em 0. Por exemplo, se são passados três argumentos para uma função, você pode referenciá-los como a seguir:
 */
//1° Exemplo  Arguments esse método e antigo ####################################################
function soma(){
    let soma = 0
    for( i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma(10, 10, 50, 79))

//