// 1° exemplo

let frutas:string[] = ["manga","pera","uva","laranja","melancia"];
//podemos usar as 2 maneira para declara um array, mais o aconselhado e o de baixo arrayObajeto o codigo fica mais elegante
let frutas2: Array<string> = ["manga","pera","uva","laranja","melancia"];
console.log(frutas);
frutas.push("banana","acerola");//adciona um elemento
console.log(frutas)
console.log(frutas2    );
frutas2.shift()
console.log(frutas2);

//2°
let addNumeros: number[][] = [];

for (let i = 0; i < 5; i++) {
  const num: number = Number(prompt("Digite um número"));
  addNumeros.push([num]);lerLinguagens(liguangens)
console.log(addNumeros);

//3°
let listaNum:Array<number> =[1,2,3,4,5,6,7,8] 
listaNum = [...listaNum,9,10,11,12,13,14,15]//com o operado splash posso continuar minha contagen sem ter que digitar tudo os outros numeros
console.log(listaNum)

//4°
let liguangens: Array<string> = new Array("JavaScript","Golang","C","Java","TypeScript");

function lerLinguagens(liguangens:string[]){
  for (let i = 0; i < liguangens.length; i++) {
  console.log(liguangens[i])
      }
}
lerLinguagens(liguangens)

