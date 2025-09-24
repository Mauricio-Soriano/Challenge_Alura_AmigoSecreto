// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  let amigoInput = document.getElementById('amigo');
  let amigoNombre = amigoInput.value;

  if (amigoNombre.trim() === '') {
    alert('Por favor, ingrese un nombre válido.');
    return;
  }

  amigos.push(amigoNombre);
  
  let lista = document.getElementById('listaAmigos');
  let itemLista = document.createElement('li');
  itemLista.textContent = amigoNombre;
  lista.appendChild(itemLista);

  limpiarCampo();
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert('Necesitas al menos 2 amigos para realizar el sorteo.');
    return;
  }
  
  let resultado = document.getElementById('resultado');
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];

  resultado.textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
}

function limpiarCampo() {
  document.getElementById('amigo').value = '';
}