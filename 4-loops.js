const idadeComprador = 15;
const acompanhada = false;
let passagemComprada = false;
const destino = "belo";

const listaDeDestinos = new Array( 
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

//---------------------------------------------------------------

if(idadeComprador>=18 || acompanhada == true){
console.log("destinos possiveis: " + listaDeDestinos);
passagemComprada = true;
}else{
    console.log("comprador menor de idade e não esta compnhada");
     passagemComprada = false;
}

//----------------------------------------------------------------

if (idadeComprador >= 18 && passagemComprada == true) {
    console.log("Boa viagem");
} else {
    console.log("Voce não pode embarcar");
}


let contador = 0;
let destinoExiste = "Destino indisponivel";
while(contador < 4){
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = "destino disponivel";       
        break;
    } 
    contador ++;
} 
console.log(destinoExiste);
 