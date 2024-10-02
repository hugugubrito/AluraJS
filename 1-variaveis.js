console.log("Ola mundo");
console.log("trabalhando com variáveis");
console.log("trabalhando com atribuições de variáveis");


//delcarando variavel com "const"
const idade = 29;

console.log(idade);
console.log(idade +2);

//conversao de tipos
/*
console.log("ano" + 2024);
console.log("2" + "2");
console.log(parseInt("2") + parseInt("3"));
console.log("2" / "2");
console.log("ricardo" / "2"); // not a numer = NaN
console.log(2.5);
*/

console.log(2,5); // separa os numeros

//concatenação de variavel

const nome = "hugo";
const sobrenome = "brito";

console.log(nome,sobrenome);
console.log("NOME:" + nome + "\nSOBRENOME:" + sobrenome);

// \n faz pular  alinha

console.log(`meu nome é ${nome}`); // apresenta a variavel dentro da string

// let -> pode alterar os dados da variavel -- const não altera

let ano = 2024;
ano = ano + 1;
console.log(ano);