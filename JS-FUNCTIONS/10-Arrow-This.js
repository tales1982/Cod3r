function pessoa(){
    this.idade = 0 // (this)Aqui e como se eu tivesse falando pessoa.idade = 0

    setInterval(()=>{
        this.idade++
        console.log(this.idade)//this
    }, 1000)
}

pessoa()

//O this dentro do arrow function e muito mais fácil de usar nao preciso armazenar dentro de uma função.