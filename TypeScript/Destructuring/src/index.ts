//Destructuring Array
const caracteristicas: string[] = ["yamar","vio50",];
console.log(caracteristicas)

const [marque,modelo] = caracteristicas
console.log(marque)
console.log(modelo)

//Destructuring Objet

const Item:{nome:string,preco:number}={
    nome:"SSD 480 GB",
    preco: 200
}
console.log(Item)
const {nome, preco} = Item
console.log(Item.nome)
console.log(Item.preco)

//tambem posso renomear o atributo
const {nome:n,preco:p} = Item

console.log(n)
console.log(p)



