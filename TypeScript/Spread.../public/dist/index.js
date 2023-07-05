"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var originalArray = [1, 2, 3];
console.log(originalArray);
var newArray = __spreadArray([], originalArray, true);
console.log(newArray);
var outroArray = __spreadArray(__spreadArray([], newArray, true), [4, 5, 6], false);
console.log(outroArray);
console.log(Math.max.apply(Math, outroArray)); //para mostra o maior elemento do meu array 
console.log(Math.min.apply(Math, outroArray)); //para mostra o menor elemento do meu array
var originalObjeto = { x: 10, y: 20, z: 30 };
console.log(originalObjeto);
var newObjeto = __assign({}, originalObjeto);
console.log(newObjeto);
var outroObjeto = __assign(__assign({}, newObjeto), { c: 11, d: 22, r: 33 });
console.log(outroObjeto);
//usando string
var turmaA = ["Tales", "Theo", "Thomas"];
console.log(turmaA);
var turmaB = ["Camily", "Gabriel", "Alexandre", "Adria"];
console.log(turmaB);
var turmaC = ["Thierry", "Taylor"];
var turmaMista = __spreadArray(__spreadArray(__spreadArray([], turmaA, true), turmaB, true), turmaC, true);
console.log(turmaMista);
console.log(turmaMista.length);
turmaMista.push("Suelia");
console.log(turmaMista);
//Operador Rest
function imprimirNomes() {
    var nomes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nomes[_i] = arguments[_i];
    }
    nomes.forEach(function (nome) { return console.log(nome); });
}
imprimirNomes('Alice', 'Bob', 'Charlie');
// Saída: Alice
//        Bob
//        Charlie
var pessoa1 = {
    nome: 'João',
    idade: 25,
    cidade: 'São Paulo',
    país: 'Brasil'
};
var nome = pessoa1.nome, idade = pessoa1.idade, detalhes = __rest(pessoa1, ["nome", "idade"]);
console.log(nome); // Saída: 'João'
console.log(idade); // Saída: 25
console.log(detalhes); // Saída: { cidade: 'São Paulo', país: 'Brasil' }
var frutas = ['maçã', 'banana'];
var legumes = ['cenoura', 'batata'];
var alimentos = __spreadArray(__spreadArray([], frutas, true), legumes, true);
console.log(alimentos);
// Saída: ['maçã', 'banana', 'cenoura', 'batata']
console.log(alimentos);
// Saída: ['maçã', 'banana', 'cenoura', 'batata']
var pessoa = {
    nome1: 'João',
    idade1: 25,
    cidade1: 'São Paulo',
    país: 'Brasil'
};
var nome1 = pessoa.nome1, idade1 = pessoa.idade1, detalhes1 = __rest(pessoa, ["nome1", "idade1"]);
console.log(nome); // Saída: 'João'
console.log(idade); // Saída: 25
console.log(detalhes); // Saída: { cidade: 'São Paulo', país: 'Brasil' }
