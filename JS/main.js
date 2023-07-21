var funcion = null;

const btnCalculate = document.getElementById('btn-calculate');
const displayInput = document.getElementById('display-input');
const btnDel = document.getElementById('btn-del');

const btnGetExp = document.getElementById('btn-get-exp');
const btnGetExp2 = document.getElementById('btn-get-exp-2');

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
    funcion = displayInput.innerHTML;
    console.log(funcion);
    const cadenaFuncion = convertFunction(funcion);
    const derivada = obtenerDerivada(cadenaFuncion);

    console.log(convertFunction(funcion));
    console.log(derivada); 

});

// Agregar exponente n a x

btnGetExp.addEventListener('click', (e) => {
    e.preventDefault();
    displayInput.innerHTML += `x<sup>3</sup>`;
})

btnGetExp2.addEventListener('click', (e) => {
  e.preventDefault();
  displayInput.innerHTML += `x<sup>2</sup>`;
})

// Restringuir el tipeo de caracteres no correspondientes 
var caracteresPermitidos = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', ')', '(', 'x', 'X'];

document.getElementById('display-input').addEventListener('keydown', function(e) {
  var teclaPresionada = e.key;
  if (teclaPresionada === 'Delete' || teclaPresionada === 'Backspace') return;
  if (teclaPresionada === 'ArrowLeft' || teclaPresionada === 'ArrowRight') return;
  if (!caracteresPermitidos.includes(teclaPresionada)) e.preventDefault(); 
});


const convertFunction = (f) => {
  let expresionRegular = /(\d*)x<sup>(\d+)<\/sup>/g;
  return cadenaModificada1 = f.replace(expresionRegular, function(match, coeficiente, exponente) {
    return coeficiente ? `(${coeficiente}*x^${exponente})`: `(x^${exponente})`;
  });
}


function obtenerDerivada(cadenaFuncion) {
  const expr = math.parse(cadenaFuncion);
  const derivada = expr.derivative('x').toString();
  return derivada;
}