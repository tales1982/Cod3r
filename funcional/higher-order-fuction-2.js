/*function precoFinal(taxa, preco){
    return preco * (1 + taxa)
}
console.log(`O preço final do produto e de ${precoFinal(0.15,30)}`)
console.log(`O preço final do produto e de ${precoFinal(0.15,60)}`)
console.log(`O preço final do produto e de ${precoFinal(0.15,80)}`)
*/
function precoFinal(taxa) {
    return function(preco) {
      return preco * (1 + taxa)
    }
}
const meuPrecoFinal = precoFinal
console.log(`O preçco final e de ${meuPrecoFinal(0.15)(30)}`)

