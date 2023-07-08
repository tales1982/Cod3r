"use strict";
//Destructuring Array
var caracteristicas = ["yamar", "vio50",];
console.log(caracteristicas);
var marque = caracteristicas[0], modelo = caracteristicas[1];
console.log(marque);
console.log(modelo);
//Destructuring Objet
var Item = {
    nome: "SSD 480 GB",
    preco: 200
};
console.log(Item);
var nome = Item.nome, preco = Item.preco;
console.log(Item.nome);
console.log(Item.preco);
//tambem posso renomear o atributo
var n = Item.nome, p = Item.preco;
console.log(n);
console.log(p);
