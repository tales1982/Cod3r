/*
never representa o tipo de valor que nunca ocorre. Ele é usado para indicar que uma função nunca retorna um valor ou que uma expressão nunca é verdadeira. O tipo never é uma subtipo de todos os outros tipos em TypeScript, o que significa que pode ser atribuído a qualquer tipo, mas nenhum tipo pode ser atribuído a never.

Existem algumas situações em que o tipo never é útil:

Funções que nunca retornam: Quando uma função lança uma exceção ou entra em um loop infinito, ela é considerada uma função que nunca retorna. O tipo de retorno dessa função deve ser never.

*/
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
        // Faz alguma coisa infinitamente
    }
}
//Outro exemplo
function falha(msg) {
    throw new Error(msg);
}
const Produto = {
    nome: 'sabonete',
    preco: -2,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preço invalido!');
        }
    }
};
console.log(Produto);
console.log(Produto.validarProduto());
