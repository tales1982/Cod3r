const originalArray:Array<number> = [1,2,3];
console.log(originalArray);
const newArray:Array<number> = [...originalArray];
console.log(newArray)
const outroArray:Array<number> = [...newArray,4,5,6];
console.log(outroArray);
console.log(Math.max(...outroArray))//para mostra o maior elemento do meu array 
console.log(Math.min(...outroArray))//para mostra o menor elemento do meu array

const originalObjeto:{x:number,y:number,z:number}={x:10,y:20,z:30};
console.log(originalObjeto);

const newObjeto:{x:number,y:number,z:number}={...originalObjeto};
console.log(newObjeto);

const outroObjeto:{x:number,y:number,z:number,c:number,d:number,r:number}={...newObjeto,c:11,d:22,r:33};
console.log(outroObjeto);

//usando string
const turmaA:Array<string>= ["Tales","Theo","Thomas"];
console.log(turmaA)
const turmaB:Array<string>= ["Camily","Gabriel","Alexandre","Adria"];
console.log(turmaB)
const turmaC:Array<string>= ["Thierry","Taylor"];
const turmaMista:Array<string>= [...turmaA,...turmaB,...turmaC];
console.log(turmaMista)
console.log(turmaMista.length)
turmaMista.push("Suelia")
console.log(turmaMista)

//Operador Rest
function imprimirNomes(...nomes: string[]) {
    nomes.forEach(nome => console.log(nome));
  }
  
  imprimirNomes('Alice', 'Bob', 'Charlie');
  // Saída: Alice
  //        Bob
  //        Charlie
  const pessoa1 = {
    nome: 'João',
    idade: 25,
    cidade: 'São Paulo',
    país: 'Brasil'
  };
  
  const { nome, idade, ...detalhes } = pessoa1;
  
  console.log(nome); // Saída: 'João'
  console.log(idade); // Saída: 25
  console.log(detalhes); // Saída: { cidade: 'São Paulo', país: 'Brasil' }
  
  const frutas: string[] = ['maçã', 'banana'];
  const legumes: string[] = ['cenoura', 'batata'];
  
  const alimentos: string[] = [...frutas, ...legumes];
  
  console.log(alimentos);
  // Saída: ['maçã', 'banana', 'cenoura', 'batata']
  

console.log(alimentos);
// Saída: ['maçã', 'banana', 'cenoura', 'batata']

  

const pessoa = {
    nome1: 'João',
    idade1: 25,
    cidade1: 'São Paulo',
    país: 'Brasil'
  };
  
  const { nome1, idade1, ...detalhes1 } = pessoa;
  
  console.log(nome); // Saída: 'João'
  console.log(idade); // Saída: 25
  console.log(detalhes); // Saída: { cidade: 'São Paulo', país: 'Brasil' }
  