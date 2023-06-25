//--------- ALIAS ----------

//Posso definir uma Alias de qualquer tipo.
//Alias tipo objeto
type Fucionarios = {
    nome:string;
    cargo:string;
    salario:number;
    ativo:boolean;
}

const fucionario:Fucionarios = {
    nome:"Tales",
    cargo:"T.I",
    salario:19.860,
    ativo:true
}

//Array
type arryAlias = string[]

const cliente:arryAlias= ["tales","Theo"]

//boolean
type verd_false = boolean

const simNao: verd_false = true