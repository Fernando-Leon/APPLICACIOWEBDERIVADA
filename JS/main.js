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
    const cadenaFuncion = convertFunction(funcion);
    console.log(cadenaFuncion);
    let derivada1 = obtenerDerivada(cadenaFuncion);
    let derivada2 = obtenerDerivada(derivada1);
    let dotCritical = resolveDerivate(derivada1); 
    showResult(funcion, derivada1, derivada2, dotCritical);
    let equationFunction = convertToFunction(derivada1);
    let root = bisectionMethod(equationFunction, 0, 2);
    console.log("La solución de la ecuación,es x =", root);
    $("html, body").animate({ scrollTop: $('#cont-result-main').offset().top }, 1000);
    graficarFuncion();
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