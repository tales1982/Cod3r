//1° Exemplo string
function saudacao(nome) {
    return `Olá, ${nome}! Bem-vindo(a)`;
}
const mensagem = saudacao("João");
console.log(mensagem); // Saída: Olá, João! Bem-vindo(a)
//2° Exemplo number
function sum(numA, numB) {
    return numA + numB;
}
const result = sum(5, 4);
console.log(`O resultado de A + B = ${result}`);
//3° Exemplo array[]
function array(nome) {
    return nome[1];
}
const filhos = ["Theo", "Thomas"];
console.log(array(filhos));
//4° Objetos
function criarPessoa(nome, idade) {
    return { nome, idade };
}
const pessoa = criarPessoa("Tales", 40);
console.log(`Ola ${pessoa.nome} muito prazer, parabens pelos seus ${pessoa.idade} anos`);
//5° bolleano
function verdade(verdadeira) {
    return verdadeira;
}
const simNao = verdade(true);
console.log(`Parabens ${pessoa.nome}, voce ja tem  ${simNao == true ? "mais de 40 anos" : "Menos de 40 anos"}`);
