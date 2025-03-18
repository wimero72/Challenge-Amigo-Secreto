// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let cantidadAmigosenLista = 0;

//let indiceLista = 0;
//crear lista para guardar nombre de los amigos
let listaAmigos = [];

//crear funcion que cambie los mensajes para indicar errores(en color rojo) o instrucciones que debe seguir el usuarios
function muestraMsgEtiqueta(elemento,texto,"black"){
   let elementoHTML =document.querySelector(elemento);
   elementoHTML.innerHTML = texto;
   elementoHTML.style.color = colorTexto;
   console.log(elemento);
   return;
}

muestraMsgEtiqueta("h1","Juego del Amigo Secreto ");
muestraMsgEtiqueta("h2","Introduce el nombre de tus amigos", "blue");

function mayusc(texInp) {
   texInp.value = texInp.value.toUpperCase();
}

function limpiarInput() {
   document.querySelector("#amigo").value = '';
}

function muestraLista(){
      let li = document.createElement("li");
      let p = document.createElement("p");
      indiceLista = listaAmigos.length-1;
      let nomAmigo = listaAmigos[indiceLista];
      console.log(nomAmigo);
      console.log(indiceLista);
      p.appendChild(document.createTextNode(nomAmigo));
      document.querySelector("#listaAmigos").appendChild(li).appendChild(p);
} 

function agregaAlistaAmigos() {
   let nombreAmigo = document.getElementById('amigo').value;
   nombreAmigo=nombreAmigo.toUpperCase();
   if (nombreAmigo==="") {
      muestraMsgEtiqueta("h2","Espacio en blanco, Por favor introduce un nombre","red");
   }else{
      if (listaAmigos.includes(nombreAmigo)) {
         muestraMsgEtiqueta("h2","Nombre repetido ingrese el nombre mas un identificador","red");
      } else {
         listaAmigos.push(nombreAmigo);
         muestraLista();
      }
   }
   limpiarInput();
   console.log(listaAmigos.length);
   return;
}


function sorteaAmigoSecreto() {
   cantidadAmigosenLista = listaAmigos.length
   indiceLista = Math.floor(Math.random() * cantidadAmigosenLista) +1;
   amigoSecreto = listaAmigos[indiceLista];
   document.querySelector("#resultado").textContent=amigoSecreto;
   let cont=document.getElementById("#jugar").; //disable   
   disableClicks(cont);
   //document.querySelector("#jugar").setAttribute("disabled","true");
   //document.querySelector("#jugar").setAttribute("style","background-color: var(--color-disabled)");
   //document.querySelector("#añadir").setAttribute("disabled","true");
   //document.querySelector("#añadir").setAttribute("style","background-color: var(--color-disabled)");
   console.log(listaAmigos.length);
   console.log(indiceLista);
   return amigoSecreto
}
function disableClicks() {
   cont.disabled.pointerEvents = "none";
 }

 function enableClicks() {
   cont.disabled.pointerEvents = "auto";
 }
function reiniciarJuego() {
   //limpiar caja
   document.querySelector("#listaAmigos").textContent="";
   document.querySelector("#resultado").textContent="";
   document.querySelector("#jugar").setAttribute("class","button-draw");
   document.querySelector("#jugar").removeAttribute("disabled");
   document.querySelector("#añadir").setAttribute("class","button-add");
   document.querySelector("#añadir").setAttribute("disabled","false");
   document.querySelector("#reiniciar").setAttribute("disabled","true");
   document.querySelector("#reiniciar").setAttribute("style","background-color:var(--color-disabled)");
   listaAmigos = [];
   console.log(listaAmigos.length);
}