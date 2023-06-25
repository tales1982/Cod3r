//1° Exemplo string
function saudacao(nome: string): string {
    return `Olá, ${nome}! Bem-vindo(a)`;
  }
  
  const mensagem = saudacao("João");
  console.log(mensagem); // Saída: Olá, João! Bem-vindo(a)
  

//2° Exemplo number

function sum(numA:number,numB:number):number{
    return numA + numB
}

const result = sum(5,4)
console.log(`O resultado de A + B = ${result}`)

//3° Exemplo array[]

function array(nome:string[]):string{
    return nome[1]
}

const filhos:string[] = ["Theo","Thomas"]
console.log(array(filhos))

//4° Objetos

function criarPessoa(nome:string,idade:number):{nome:string, idade:number}{
    return {nome,idade}
}

const pessoa = criarPessoa("Tales",40)
console.log(`Ola ${pessoa.nome} muito prazer, parabens pelos seus ${pessoa.idade} anos`)

//5° bolleano

function verdade(verdadeira:boolean):boolean{
return verdadeira
}

const simNao:boolean = verdade(true)
console.log(`Parabens ${pessoa.nome}, voce ja tem  ${simNao == true?"mais de 40 anos":"Menos de 40 anos"}`)

