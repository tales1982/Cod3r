//1° Exemplo funcao void 
const filhos = ["Camily", "Gabriel", "Alexandre", "Adria", "Theo", "Thomas"];
function Menu() {
    const filho = Number(prompt(`Escolha entra a lista um nome.
    0° Camyly
    1° Gabriel
    2° Alexandre
    3° Adria
    4° Theo
    5° Thomas`));
    alert(`O nome escolhido foi ${filhos[filho]}`);
}
Menu();
