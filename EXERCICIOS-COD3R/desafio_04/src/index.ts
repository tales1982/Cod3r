class Fucionarios{
    superVisores:string[];
    bateHora:number

    constructor(superVisores:string[],bateHora:number){
        this.superVisores = superVisores;
        this.bateHora = bateHora;
    }

    validarHora():void{
        
        if(this.bateHora <= 8){
        let hora:string = ""
        hora = this.bateHora.toString()
        alert(`Voce chegou as ${hora} esta na hora certa, pode entra`)
        }else{
            let hora:string
            hora = this.bateHora.toString()
        alert(`Voce chegou as ${hora} voce esta atrazado,Nao pode entra`)
        }
    }
}

const gerente: Fucionarios = new Fucionarios(["Tales","Souza"],null)
gerente.bateHora = Number(prompt("Digite o horario que vc chegou."))
//console.log(gerente.superVisores)
//gerente.validarHora() 

const novoFucionario:Fucionarios = new Fucionarios(["Maria","Joao","Victor"],7)
console.log(novoFucionario.superVisores)
gerente.validarHora() 
