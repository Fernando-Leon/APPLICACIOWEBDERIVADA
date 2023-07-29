var funcion = null; // El valor de la funcion se unicializa en null
const btnCalculate = document.getElementById('btn-calculate'); // Boton para calcular los maximos y minimos
const displayInput = document.getElementById('display-input'); // Input donde se ingresa la funcion
const btnDel = document.getElementById('btn-del'); // Boton para borrar en el input
const btnGetExp = document.getElementById('btn-get-exp'); // Boton para agregar exponente 3 a x
const btnGetExp2 = document.getElementById('btn-get-exp-2'); // Boton para agregar exponente 2 a x
const btns = document.getElementsByClassName('btn'); // Botones de la calculadora
const btnsArray = Array.from(btns);

// Agregar evento click a cada boton para que se muestre en el input
btnsArray.forEach(function(btn) {
  btn.addEventListener('click', function() {
    let valor = this.value;
    displayInput.innerHTML += valor;
  });
});

btnDel.addEventListener('click', (e) => { // Boton para borra el ultimo caracter del input
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

// Evento para borrar en valor completo del dsiplayInput pasado n segundos presionado el boton
var tiempoInicio;
btnDel.addEventListener("mousedown", function() { tiempoInicio = new Date().getTime(); });

btnDel.addEventListener("mouseup", function() {
  let duracion = new Date().getTime() - tiempoInicio;
  if (duracion > 1500) displayInput.innerHTML = ""; 
});

btnGetExp2.addEventListener('click', (e) => { // Agregar exponente 2 a x
  e.preventDefault();
  displayInput.innerHTML += `x<sup>2</sup>`;
})

btnGetExp.addEventListener('click', (e) => { // Agregar exponente 3 a x
  e.preventDefault();
  displayInput.innerHTML += `x<sup>3</sup>`;
})

// Restringuir el tipeo de caracteres no correspondientes 
const caracteresPermitidos = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', ')', '(', 'x', 'X'];
document.getElementById('display-input').addEventListener('keydown', function(e) {
  var teclaPresionada = e.key;
  if (teclaPresionada === 'Delete' || teclaPresionada === 'Backspace') return;
  if (teclaPresionada === 'ArrowLeft' || teclaPresionada === 'ArrowRight') return;
  if (!caracteresPermitidos.includes(teclaPresionada)) e.preventDefault(); 
});

// Boton para calcular los maximos y minimos (funcion main)

btnCalculate.addEventListener('click', (e) => {
  e.preventDefault();
  funcion = displayInput.innerHTML;
  console.log(funcion);    
  const cadenaFuncion = convertFunction(funcion);
  console.log(cadenaFuncion);
  let derivada1 = obtenerDerivada(cadenaFuncion);
  let derivada2 = obtenerDerivada(derivada1);
  let equationFunction = convertToFunction(derivada1);
  let dotCritical = bisectionMethod(equationFunction,  -10, 10, 0.0001);
  let values = calculateEcuation(cadenaFuncion, dotCritical);
  console.log("VALUE IN Y: ", values[0]);
  showResult(funcion, derivada1, derivada2, `${derivada1} = 0`, dotCritical, values);
  graficarFuncion(`f(x) = ${cadenaFuncion}`, {x: dotCritical, y: values[0]});
  $("html, body").animate({ scrollTop: $('#cont-result-main').offset().top }, 1000);
});