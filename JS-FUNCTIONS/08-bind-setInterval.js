
function pessoa(){
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this),1000)//Aqui é o segundo que minha função vai ser disparada 
    //tenho que usar o bind para poder acessar o this, porque o this esta fora de alcance
}

new pessoa

//Tenho outra possibilidade também SENDO ATE MAIS FACIL ESTA MANEIRA 

function pessoa2() {
  this.idade = 0;

  const self = this //Se eu declara uma variável do this fora da função posso usar ela dentro da minha função como no exemplo
  setInterval(
    function () {
      self.idade++;
      console.log(self.idade);
    },1000
  ); 
}

new pessoa2();