const btnCalculate = document.getElementById('btn-calculate');
const displayInput = document.getElementById('display-input');
const btnDel = document.getElementById('btn-del');

const popup = document.getElementById('conatiner-popup');
popup.style.display = 'none';
const btnSetExp = document.getElementById('btn-set-exp');
const btnGetExp = document.getElementById('btn-get-exp');

const btns = document.getElementsByClassName('btn');

const btnsArray = Array.from(btns);

// Agregar evento click a cada boton
btnsArray.forEach(function(btn) {
  btn.addEventListener('click', function() {
    let valor = this.value;
    displayInput.innerHTML += valor;
  });
});

// Evento para borrar en valor del dsiplayInput

var tiempoInicio;

btnDel.addEventListener("mousedown", function() {
  tiempoInicio = new Date().getTime();
});

btnDel.addEventListener("mouseup", function() {
  var duracion = new Date().getTime() - tiempoInicio;
  if (duracion > 1500) { displayInput.innerHTML = ""; }
});


btnDel.addEventListener('click', (e) => {
  e.preventDefault();
  let expresionRegular = /(<sup>\d+<\/sup>)$/;
  let cadena = displayInput.innerHTML;
  if (expresionRegular.test(cadena)) {
    cadena = cadena.replace(/(<sup>\d+<\/sup>)$/, '');
    displayInput.innerHTML = cadena;
  } else {
    displayInput.innerHTML = cadena.slice(0, -1);
  }
});


btnCalculate.addEventListener('click', (e) => {
    e.preventDefault();
    alert(displayInput.innerHTML);
});

// Agregar exponente n a x

btnGetExp.addEventListener('click', (e) => {
    e.preventDefault();
    popup.style.display = 'flex';
})

btnSetExp.addEventListener('click', (e) => {
    e.preventDefault();
    let getExpInput = document.getElementById('input-exp').value;
    displayInput.innerHTML += `x<sup>${getExpInput}</sup>`;
    popup.style.display =  'none';
})

// Restringuir el tipeo de caracteres no correspondientes 
var caracteresPermitidos = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', ')', '(', 'x'];

document.getElementById('display-input').addEventListener('keydown', function(e) {
  var teclaPresionada = e.key;

  if (teclaPresionada === 'Delete' || teclaPresionada === 'Backspace') {
    return;
  }
  
  // Permitir teclas de navegación (Flecha izquierda y derecha)
  if (teclaPresionada === 'ArrowLeft' || teclaPresionada === 'ArrowRight') {
    return;
  }

  if (!caracteresPermitidos.includes(teclaPresionada)) {
    e.preventDefault();
  }
});
