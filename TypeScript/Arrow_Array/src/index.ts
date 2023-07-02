//Arrow function
//sintaxy normal
const calc = (a: number, b: number): number => {
    return a + b;
};
//sintaxy reduzida
const calc2 = (a: number, b: number): number => a + b;//aqui o retorno e emplicido

//exemplo de uma arrow function

const convertToUpperCase = (letra:string):string => letra.toUpperCase()

console.log(convertToUpperCase("convertendo tudo para maiusculo"))

const numeroOrdenados=(num:number[]):number[]=>num.sort()
console.log(numeroOrdenados([8,4,6,7,1,3,9,2,5]))

const outroArray=(num:Array<number>):Array<number> => num.sort()
console.log(outroArray([8,4,6,7,1,3,9,2,5]))