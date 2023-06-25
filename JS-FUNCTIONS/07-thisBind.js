//No contexto de execução global (fora de qualquer função), this refere-se ao objeto global, seja em modo estrito ou não.

const pessoa = {
    nome: "Tales",
    sobrenome: "Lima",
    idade: 39,
    exibir(){
        console.log(this.nome,this.sobrenome,this.idade)//Nesse caso estou meu referindo ao obj pessoa (this = pessoa) o this refere sempre a chave principal que ele pertence.
    }
}

pessoa.exibir()

//posso usar o (bind) para resolver quaquer conflito que tenha quando chamar o this.
//O método bind() cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido, com uma sequência determinada de argumentos precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada.
//Exemplo
const exibirPessoa = pessoa.exibir.bind(pessoa)
exibirPessoa()

//Outro Exemplo usando o bild
const modulo = {
    n1: 50,
    retornaN1(){
        return this.n1
    }
}
console.log(modulo.retornaN1())

const teste1 = modulo.retornaN1
console.log(teste1())//Aqui e esperado que der undefined porque dessa maneira nao consigo acessar o this dentro do obj.

const teste2 = modulo.retornaN1.bind(modulo)
console.log(teste2())//aqui usando o bind ja consigo acessar minha funcao dentro do obj.