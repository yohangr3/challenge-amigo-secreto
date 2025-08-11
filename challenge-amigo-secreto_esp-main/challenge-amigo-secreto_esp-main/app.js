//Declaramos un arreglo para almacenar los amigos secretos
let amigos = [];

function agregarAmigo() {
  // Captura el valor del campo de entrada
  let texto = document.querySelector(".input-name");
  // Eliminamos espacios al inicio y al final del texto
  let amigo = texto.value.trim();

  if (texto.value === "") {
    alert("Por favor, ingresa un nombre.");
    return;
  }

  //Agregamos el amigo al arreglo
  amigos.push(amigo);

  //Limpiamos el input
  texto.value = "";
  console.log(amigos);

  actualizarLista();
  
}

function actualizarLista(){
  let elementoLista = document.querySelector(".name-list");
  // Limpiamos la lista antes de actualizar
  elementoLista.innerHTML = ""; 

  for(let i=0; i<amigos.length;i++){
    let li = document.createElement("li");
    li.textContent = amigos[i];
    elementoLista.appendChild(li);

  }

}

function sortearAmigos() {
  if (amigos.length < 2) {
    alert("Necesitas al menos 2 amigos para sortear.");
    return;
  }

  //Creamos un número aleatorio para seleccionar un amigo
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  //Seleccionamos el amigo del arreglo usando el índice aleatorio
  let amigoSeleccionado = amigos[indiceAleatorio];
  //Mostramos el resultado en el elemento con id "resultado"
  document.getElementById("resultado").innerHTML = `El amigo sorteado es: <b>${amigoSeleccionado}</b>`;
  // Limpiamos la lista después de sortear
  let elementoLista = document.querySelector(".name-list");
  elementoLista.innerHTML = ""; 
}
 