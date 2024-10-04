console.log("trabalhando com Condições\n");

//instancia uma lista
const listaDeDestinos = new Array( 
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

//adiciona um item na lista
listaDeDestinos.push(`Santa Catarina`);


// const idadeComprador = 15;
// const acompanhada = false;
// if(idadeComprador>=18){
// console.log("destinos possiveis: " + listaDeDestinos);
// }else if(acompanhada == true){
//     console.log("comprador está acompnhado");
//     console.log("destinos possiveis: " + listaDeDestinos);
// } else{
//     console.log("comprador menor de idade e não esta acompanhado");
// }



// ---> || = ou
// ---> && = e

const idadeComprador = 15;
const acompanhada = false;
let passagemComprada = "";
if(idadeComprador>=18 || acompanhada == true){
console.log("destinos possiveis: " + listaDeDestinos);
passagemComprada = true;
}else{
    console.log("comprador menor de idade e não esta compnhada");
     passagemComprada = false;
}

//----------------------------------

if (idadeComprador >= 18 && passagemComprada == true) {
    console.log("Boa viagem");
} else {
    console.log("Voce não pode embarcar");
}