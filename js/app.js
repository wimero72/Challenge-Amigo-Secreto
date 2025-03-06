// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let cantidadAmigosenLista=0;
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
   let nombreAmigo=document.querySelector("#amigo").value;
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
   cantidadAmigosenLista=listaAmigos.length
   indiceLista =  Math.floor(Math.random()*cantidadAmigosenLista)+1;
   amigoSecreto=listaAmigos[indiceLista];

   console.log(indiceLista);
   console.log(amigoSecreto);
   //Si ya sorteamos todos los números
   if (listaAmigos.length == cantidadAmigosenLista) {
       asignarTextoElemento('p','Ya se sortearon todos los nombres de amigos');
   } else {
       //Si el numero generado está incluido en la lista 
       if (listaAmigosSorteados.includes(amigoSecreto)) {
           return generarNumeroSecreto();
       } else {
           listaNumerosSorteados.push(numeroGenerado);
           return numeroGenerado;
       }
   }
}
function validainputvacio() {

}
    