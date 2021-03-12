let animado2 = document.querySelectorAll('.div-white');

function mostrarScroll() {
  let scrollTop = document.documentElement.scrollTop;
  for (var i = 0; i < animado2.length; i++) {
    let alturaAnimado = animado2[i].offsetTop;
    if (alturaAnimado + 800 < scrollTop) {
      animado2[i].style.opacity = 1;

    }
  }
}

window.addEventListener('scroll', mostrarScroll);

let animado = document.querySelectorAll('.div-white2');

function mostrarScroll2() {
  let scrollTop = document.documentElement.scrollTop;
  for (var i = 0; i < animado.length; i++) {
    let alturaAnimado = animado[i].offsetTop;
    if (alturaAnimado + 800 < scrollTop) {
      animado[i].style.opacity = 1;

    }
  }
}

window.addEventListener('scroll', mostrarScroll2);



let animadoFoto = document.querySelectorAll('.javi-image');

function mostrarScroll3() {
  let scrollTop = document.documentElement.scrollTop;
  for (var i = 0; i < animadoFoto.length; i++) {
    let alturaAnimado = animadoFoto[i].offsetTop;
    if (alturaAnimado + 800 < scrollTop) {
      animadoFoto[i].style.opacity = 1;

    }
  }
}

window.addEventListener('scroll', mostrarScroll3);

let animadoFrase = document.querySelectorAll('.mostrar-frase');

function mostrarScroll4() {
  let scrollTop = document.documentElement.scrollTop;
  for (var i = 0; i < animadoFrase.length; i++) {
    let alturaAnimado = animadoFrase[i].offsetTop;
    if (alturaAnimado + 800 < scrollTop) {
      animadoFrase[i].style.opacity = 1;

    }
  }
}

window.addEventListener('scroll', mostrarScroll4);


var modal = document.querySelector(".ventana");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".boton-cerrar");

function toggleModal() {
  modal.classList.toggle("mostrar-ventana");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}
trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
