function exibirMensagem(valor: string | number) {
    if (typeof valor === 'string') {
      console.log('A mensagem é: ' + valor);
    } else if (typeof valor === 'number') {
      console.log('O número é: ' + valor);
    }
  }
  
  exibirMensagem('Olá'); // Saída: A mensagem é: Olá
  exibirMensagem(42); // Saída: O número é: 42

  
interface Voiture{
    marque:string
    model:string|number
    anne:number
    color:string
}

const car: Voiture ={
    marque:"Porche",
    model:"Panamera",//string
    anne:2019,
    color:"black"
}

const car2: Voiture ={
    marque:"Fiat",
    model:147,//numbeer
    anne:2022,
    color:"Red"
}


console.log(car)
console.log(car2)