class Fucionarios {
    superVisores;
    bateHora;
    constructor(superVisores, bateHora) {
        this.superVisores = superVisores;
        this.bateHora = bateHora;
    }
    validarHora() {
        if (this.bateHora <= 8) {
            let hora = "";
            hora = this.bateHora.toString();
            alert(`Voce chegou as ${hora} esta na hora certa, pode entra`);
        }
        else {
            let hora;
            hora = this.bateHora.toString();
            alert(`Voce chegou as ${hora} voce esta atrazado,Nao pode entra`);
        }
    }
}
const gerente = new Fucionarios(["Tales", "Souza"], null);
gerente.bateHora = Number(prompt("Digite o horario que vc chegou."));
//console.log(gerente.superVisores)
//gerente.validarHora() 
const novoFucionario = new Fucionarios(["Maria", "Joao", "Victor"], 7);
console.log(novoFucionario.superVisores);
gerente.validarHora();
