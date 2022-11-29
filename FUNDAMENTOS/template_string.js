var a = 5;
var b = 10;
console.log('Quinze é ' + (a + b) + ' e\nnão ' + (2 * a + b) + '.');
// "Quinze é 15 e
// não 20."


//usando o template string

var a = 5;
var b = 10;
console.log(`Quinze é ${a + b} e
não ${2 * a + b}.`);
// "Quinze é 15 e
// não 20."

/*Template Strings são strings que permitem expressões embutidas. Você pode utilizar string multi-linhas e interpolação de string com elas.
Basicamente é uma nova forma de criar strings e tornar o seu código um pouco mais legível.*/