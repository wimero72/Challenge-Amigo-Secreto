// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
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
