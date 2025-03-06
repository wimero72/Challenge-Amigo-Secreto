// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let cantidadAmigosenLista = 0;
let indiceLista = 0;
let listaAmigos = [];

function muestraMsgEtiqueta(elemento, texto) {
   let elementoHTML = document.querySelector(elemento);
   elementoHTML.innerHTML = texto;
   return;
}

muestraMsgEtiqueta("h1","Juego del Amigo Secreto ");
muestraMsgEtiqueta("h2","Introduce el nombre de tus amigos");

function limpiarInput() {
   document.querySelector("#amigo").value = '';
}

function addItemLista(ntextoitem){
   let nuevoItem=document.createElement('li');
   let ul=document.getElementById("listaAmigoa");
   let textoit=document.createTextNode(ntextoitem);
   nuevoItem.appendChild(textoit);
   ul.appendChild(nuevoItem);
   console.log(nuevoItem);
   limpiarInput();
   return;
}
function agregaAlistaAmigos() {
   let nombreAmigo = document.getElementById('amigo').value;
   console.log(nombreAmigo);
   if (nombreAmigo==="") {
      muestraMsgEtiqueta("h2","Por favor introduce un nombre");
   }else{
      if (listaAmigos.includes(nombreAmigo)) {
         muestraMsgEtiqueta("h2","nombre repetido ingrese el nombre mas un identificador");
      } else {
         listaAmigos.push(nombreAmigo);
      }
   }

   console.log(listaAmigos);
   addItemLista(nombreAmigo);
   return;
}

function sorteaAmigoSecreto() {
   cantidadAmigosenLista = listaAmigos.length
   indiceLista = Math.floor(Math.random() * cantidadAmigosenLista) + 1;
   amigoSecreto = listaAmigos[indiceLista];

   console.log(indiceLista);
   console.log(amigoSecreto);
   // //Si ya sorteamos todos los números
   // if (listaAmigos.length == cantidadAmigosenLista) {
   //     asignarTextoElemento('p','Ya se sortearon todos los nombres de amigos');
   // } else {
   //     //Si el numero generado está incluido en la lista 
   //     if (listaAmigosSorteados.includes(amigoSecreto)) {
   //         return generarNumeroSecreto();
   //     } else {
   //         listaNumerosSorteados.push(numeroGenerado);
   //         return numeroGenerado;
   //     }
   // }
   return amigoSecreto
}
function validainputvacio() {

}
