//enums
var Cor;
(function (Cor) {
    //Saida em forma numerica
    Cor[Cor["Prento"] = 0] = "Prento";
    Cor[Cor["Branco"] = 1] = "Branco";
    Cor[Cor["Verde"] = 2] = "Verde";
    Cor[Cor["Vermelho"] = 3] = "Vermelho"; //
})(Cor || (Cor = {}));
console.log(Cor.Verde);
//res: 2
//Outros exemplos
var Filmes;
(function (Filmes) {
    Filmes[Filmes["Action"] = 20] = "Action";
    Filmes[Filmes["Comedie"] = 21] = "Comedie";
    Filmes[Filmes["Romance"] = 22] = "Romance";
    Filmes[Filmes["Trille"] = 23] = "Trille";
    Filmes[Filmes["Horror"] = 24] = "Horror";
    Filmes[Filmes["Suspence"] = 25] = "Suspence";
})(Filmes || (Filmes = {}));
//posso definir os numero do meu enum por exemplo vai comecar com 20
console.log(Filmes.Horror);
//saida 24
//outro exemplo
var Frutas;
(function (Frutas) {
    Frutas[Frutas["Manga"] = 0] = "Manga";
    Frutas[Frutas["Pera"] = 5] = "Pera";
    Frutas[Frutas["Uva"] = 6] = "Uva";
    Frutas[Frutas["Melancia"] = 7] = "Melancia";
    Frutas[Frutas["Banana"] = 2] = "Banana";
    Frutas[Frutas["Abacaxi"] = 3] = "Abacaxi";
})(Frutas || (Frutas = {}));
/*
console.log(Frutas.Manga)//0
console.log(Frutas.Pera)//5
console.log(Frutas.Uva)//6
console.log(Frutas.Melancia)//7
console.log(Frutas.Banana)//2
console.log(Frutas.Abacaxi)//3
*/
function showMenu(option) {
    option = prompt(`Ola vamos escolher uma frutas!
1° Manga
2° Pera
3° Uva
4° Melancia
5° Banana
6° Abacaxi
Escolha umas das frutas acima.`);
    return option;
}
function showFruta(fruta) {
    console.log(`A fruta escolhida foi: ${fruta}`);
}
function nomeFrutas() {
    const escolha = parseFloat(showMenu(""));
    showFruta(escolha);
    switch (escolha) {
        case 1:
            alert(`Otima escola a fruta escolhida foi Manga`);
            break;
        case 2:
            alert(`Otima escola a fruta escolhida foi Pera`);
            break;
        case 3:
            alert(`Otima escola a fruta escolhida foi Uva`);
            break;
        case 4:
            alert(`Otima escola a fruta escolhida foi Melancia`);
            break;
        case 5:
            alert(`Otima escola a fruta escolhida foi Banana`);
            break;
        case 6:
            alert(`Otima escola a fruta escolhida foi Abacaxi`);
            break;
        default:
            if (escolha <= 0 || escolha > 6) {
                alert(`Escola de 0 a 5`);
            }
            break;
    }
}
nomeFrutas();
