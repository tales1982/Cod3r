//1° Exemplo declarando um objeto direto no user.
const Camily = {
    name: "Camily",
    age: 18,
    male: false
};
console.log(Camily);
//2° Criando uma classe pra declara um objeto, podendo declara varios clientes
class Kids {
    name;
    age;
    male;
    constructor(name, age, male) {
        this.name = name;
        this.age = age;
        this.male = male;
    }
    validarSexo() {
        if (this.male || !this.male)
            alert(`${this.name} do sexo ${this.male == true ? "masculino" : "feminino"} tem ${this.age} anos.`);
    }
}
const gabriel = new Kids("Gabriel", 17, true);
gabriel.validarSexo();
