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
    console.log("Voce pode embarcar");
} else {
    console.log("Voce não pode embarcar");
}


let contador = 0;
let destinoExiste = false;
while(contador < 4){
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;       
        break;
    } 
    contador ++;
} 
console.log(destinoExiste);
 
if (passagemComprada && destinoExiste) {
    console.log("boa viagem");
}else{
    console.log("erro");
}

let a = 0;
let b = 1;
let c = a + b;
let d = b + c;

a = c;
b = d;
for (let i = 0; i <=25; i++ ){
    console.log(a,b);
    let c = a + b;
    let d = b + c;  
    a = c;
    b = d;
}