// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let indiceLista=0;
let listaAmigos=[];
let titulo1=document.querySelector("h1");
titulo1.innerHTML="Juego del Amigo Secreto";
let titulo2=document.querySelector("h2");
titulo2.innerHTML="Introduce el nombre de tus amigos";
function showMsg(etiqueta, texto) {
   let etiquetaHTML
}
function agregaAlistaAmigos() {
   let nombreAmigo=document.getElementById("amigo").value;
   console.log(nombreAmigo);
   if (listaAmigos.includes(nombreAmigo)){
    alert("nombre repetido ingrese el nombre mas un identificador");
   }else{
    listaAmigos.push(nombreAmigo);
   }
   console.log(listaAmigos);
   document.getElementById("amigo").value="";
   return;
}
function limpiarInput() {
   document.querySelector('#amigo').value = '';
}
function asignarTextoElemento(elemento, texto) {
   let elementoHTML = document.querySelector(elemento);
   elementoHTML.innerHTML = texto;
   return;
}
function sorteaAmigoSecreto() {
   indiceLista =  Math.floor(Math.random()*cantidadAmigosenLista)+1;

   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   //Si ya sorteamos todos los números
   if (listaNumerosSorteados.length == numeroMaximo) {
       asignarTextoElemento('p','Ya se sortearon todos los números posibles');
   } else {
       //Si el numero generado está incluido en la lista 
       if (listaNumerosSorteados.includes(numeroGenerado)) {
           return generarNumeroSecreto();
       } else {
           listaNumerosSorteados.push(numeroGenerado);
           return numeroGenerado;
       }
   }
}
