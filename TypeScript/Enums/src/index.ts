//enums

enum Cor {
    //Saida em forma numerica
    Prento,//0
    Branco,//1
    Verde,//2
    Vermelho//
}

console.log(Cor.Verde)
//res: 2

//Outros exemplos
enum Filmes {
    Action = 20,
    Comedie,
    Romance,
    Trille,
    Horror,
    Suspence
}

//posso definir os numero do meu enum por exemplo vai comecar com 20

console.log(Filmes.Horror)
//saida 24

//outro exemplo

enum Frutas {
    Manga,
    Pera = 5,
    Uva,
    Melancia,
    Banana = 2,
    Abacaxi
}
/*
console.log(Frutas.Manga)//0
console.log(Frutas.Pera)//5
console.log(Frutas.Uva)//6
console.log(Frutas.Melancia)//7
console.log(Frutas.Banana)//2
console.log(Frutas.Abacaxi)//3
*/
function showMenu(option: string) {
    option = prompt(`Ola vamos escolher uma frutas!
1° Manga
2° Pera
3° Uva
4° Melancia
5° Banana
6° Abacaxi
Escolha umas das frutas acima.`)
    return option
}

function showFruta(fruta: number): void {
    console.log(`A fruta escolhida foi: ${fruta}`);
}

function nomeFrutas(): void {
    const escolha = parseFloat(showMenu(""));
    showFruta(escolha);
    
    switch (escolha) {
        case 1:
            alert(`Otima escola a fruta escolhida foi Manga`)
            break;
        case 2:
            alert(`Otima escola a fruta escolhida foi Pera`)
            break;
        case 3:
            alert(`Otima escola a fruta escolhida foi Uva`)
            break;
        case 4:
            alert(`Otima escola a fruta escolhida foi Melancia`)
            break;
        case 5:
            alert(`Otima escola a fruta escolhida foi Banana`)
            break;
        case 6:
            alert(`Otima escola a fruta escolhida foi Abacaxi`)
            break;
        default:
            if (escolha <= 0 || escolha > 6) {
        alert(`Escola de 0 a 5`)
    }
            break;
    }


}

nomeFrutas()
