"use strict";
//Arrow function
//sintaxy normal
var calc = function (a, b) {
    return a + b;
};
//sintaxy reduzida
var calc2 = function (a, b) { return a + b; }; //aqui o retorno e emplicido
//exemplo de uma arrow function
var convertToUpperCase = function (letra) { return letra.toUpperCase(); };
console.log(convertToUpperCase("convertendo tudo para maiusculo"));
var numeroOrdenados = function (num) { return num.sort(); };
console.log(numeroOrdenados([8, 4, 6, 7, 1, 3, 9, 2, 5]));
var outroArray = function (num) { return num.sort(); };
console.log(outroArray([8, 4, 6, 7, 1, 3, 9, 2, 5]));
//# sourceMappingURL=index.js.map