// variable que guarda la cantidad de elementos en la lista
let cantidadAmigosenLista = 0;
//crear lista para guardar nombre de los amigos
let listaAmigos = [];

//Muestra el mensajes para indicar errores(en color rojo) o instrucciones que debe seguir el usuarios o azul si todo va bien
function muestraMsgEtiqueta(elemento,texto,colorTexto){
   let elementoHTML =document.querySelector(elemento);
   elementoHTML.innerHTML = texto;
   elementoHTML.style.color = colorTexto;
   console.log(elemento);
}

//limpia la caja de input
function mayusc(texInp) {
   texInp.value = texInp.value.toUpperCase();
}

function limpiarInput() {
   document.querySelector("#amigo").value = '';
}

//habilita o deshabilita el boton indicado con el Id
function sWitche(idenTificador, acCion) {
   let elementoHTML=document.querySelector(idenTificador);
   if(acCion==true){
      //habilitar botón
      console.log(acCion);
      elementoHTML.removeAttribute('disabled');
   }else{
      //Deshabilitar botón
      console.log(acCion);
      elementoHTML.setAttribute("disabled","true"); 
   }
 
 }

//imprime la lista de amigos conforme se van inngresando
function muestraLista(){
      let li = document.createElement("li");
      let p = document.createElement("p");
      indiceLista = listaAmigos.length-1;
      let nomAmigo = listaAmigos[indiceLista];
      console.log(nomAmigo);
      console.log(indiceLista);
      p.appendChild(document.createTextNode(nomAmigo));
      document.querySelector("#listaAmigos").appendChild(li).appendChild(p);
      return;
} 

function agregaAlistaAmigos() {
   let nombreAmigo = document.getElementById("amigo").value;
   nombreAmigo=nombreAmigo.toUpperCase();

   if (nombreAmigo==="") {
      muestraMsgEtiqueta("h2","Espacio en blanco, Por favor introduce un nombre","red");
   }else{
      if (listaAmigos.includes(nombreAmigo)) {
         muestraMsgEtiqueta("h2","Nombre repetido ingrese el nombre mas un identificador","red");
      } else {
         listaAmigos.push(nombreAmigo);
         muestraLista();
         sWitche("#sortear",true);
      }
   }
   limpiarInput();
   console.log(listaAmigos.length);
   return;
}

//Escoje el amigo secreto de la lista
function sorteaAmigoSecreto() {
   indiceLista = Math.floor(Math.random() * listaAmigos.length) +1;
   document.querySelector("#resultado").textContent=listaAmigos[indiceLista];
   sWitche("#sortear", false);
   sWitche("#añadir", false);
   sWitche("#reiniciar", true)
   console.log(listaAmigos.length);
   console.log(indiceLista);
   return;
}

function reiniciarJuego() {
   muestraMsgEtiqueta("h1","Juego del Amigo Secreto ",);
   muestraMsgEtiqueta("h2","Introduce el nombre de tus amigos", "blue");
   document.querySelector("#listaAmigos").textContent="";
   document.querySelector("#resultado").textContent="";
   sWitche("#sortear", false);
   sWitche("#reiniciar", false);
   sWitche("#añadir", true);
   
   listaAmigos = [];
   console.log(listaAmigos.length);
   return;
}
//llama a reiniciarJuego para que cargue las condiciones iniciales
reiniciarJuego();