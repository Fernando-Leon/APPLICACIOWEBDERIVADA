
// Funcion para convertir la funcion ingresada a una exprecion valida para mathjs
const convertFunction = (f) => {
  let expresionRegular = /(\d*)x(<sup>(\d+)<\/sup>)?/g;
  return f.replace(expresionRegular, function(match, coeficiente, _, exponente) {
    return coeficiente ? `(${coeficiente}*x${exponente ? '^' + exponente : ''})` : `(x${exponente ? '^' + exponente : ''})`;
  }).replace(/x<sup>1<\/sup>/g, 'x');
};  

// Calcula la deribada de la funcion ingresada
function obtenerDerivada(cadenaFuncion) {
  let expr = math.parse(cadenaFuncion);
  let derivada = math.derivative(expr, 'x').toString(); 
  return derivada;
}

// Convierte el string de la ecuación en una función
function convertToFunction(str) {
  return function(x) {
    return eval(str);
  };
}

// Resuelve la ecuación con el valor de x
const calculateEcuation = (fx, x) => {
  let sustitutedX = fx.replace(/x/g, x);
  return math.evaluate(sustitutedX);
}

function bisectionMethod(func, a, b) {
  let fa = func(a);
  let fb = func(b);
  if (fa * fb >= 0) {
    throw new Error("La función no cumple con los requisitos del método de bisección.");
  }

  let c = (a + b) / 2;
  let fc = func(c);
  while (Math.abs(fc) > 1e-15) { // Usamos una tolerancia muy pequeña (1e-15) para la precisión
    if (fa * fc < 0) {
      b = c;
      fb = fc;
    } else {
      a = c;
      fa = fc;
    }
    c = (a + b) / 2;
    fc = func(c);
  }
  return c;
}
