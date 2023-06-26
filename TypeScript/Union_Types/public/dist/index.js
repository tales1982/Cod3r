function exibirMensagem(valor) {
    if (typeof valor === 'string') {
        console.log('A mensagem é: ' + valor);
    }
    else if (typeof valor === 'number') {
        console.log('O número é: ' + valor);
    }
}
exibirMensagem('Olá'); // Saída: A mensagem é: Olá
exibirMensagem(42); // Saída: O número é: 42
const car = {
    marque: "Porche",
    model: "Panamera",
    anne: 2019,
    color: "black"
};
const car2 = {
    marque: "Fiat",
    model: 147,
    anne: 2022,
    color: "Red"
};
console.log(car);
console.log(car2);
