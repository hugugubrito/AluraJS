console.log("trablhando com listas");

/*
const salvador = `Salvador`;
const saoPaulo = `Sao Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

^^^^^^ dificuldade de imprimir lista:

console.log("destinos distintos");
console.log(salvador,saoPaulo,rioDeJaneiro); nao aconselhado imprimir lista com uma variavel por vez
*/

//instancia uma lista
const listaDeDestinos = new Array( 
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

//adiciona um item na lista
listaDeDestinos.push(`Santa Catarina`);

console.log(listaDeDestinos);


//remove itens da lista
listaDeDestinos.splice(1,1);

console.log(listaDeDestinos);


// imprimi um unico elemento da lista
console.log(listaDeDestinos[3]);





