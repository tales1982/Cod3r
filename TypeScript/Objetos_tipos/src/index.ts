//1° Exemplo declarando um objeto direto no user.
const Camily:{name:string,age:number,male:boolean}={
    name:"Camily",
    age: 18,
    male:false
}

console.log(Camily)

//2° Criando uma classe pra declara um objeto, podendo declara varios clientes

class Kids {
    name:string;
    age:number;
    male:boolean;

    constructor(name:string,age:number,male:boolean){
        this.name = name;
        this.age = age;
        this.male = male
    }

    validarSexo():void{
        if(this.male || !this.male)
        alert(`${this.name} do sexo ${this.male == true? "masculino":"feminino"} tem ${this.age} anos.`)
    }
}

const gabriel:Kids= new Kids("Gabriel",17,true)
gabriel.validarSexo()