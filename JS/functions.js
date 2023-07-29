
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
  let sustitutedX = fx.replace(/x/g, `(${x})`);
  return [math.evaluate(sustitutedX).toFixed(2), sustitutedX];
}

function bisectionMethod(func, a, b, tolerance) {
  let fa = func(a);
  let fb = func(b);

  // Si f(a) y f(b) tienen el mismo signo, el método no garantiza encontrar una raíz,
  // pero permitiremos continuar y ver si podemos encontrar una raíz dentro del intervalo.
  if (fa * fb >= 0) {
    console.warn("Advertencia: f(a) y f(b) tienen el mismo signo. El método puede no encontrar una raíz en este intervalo.");
  }

  let c = math.bignumber(a).plus(b).div(2);
  let fc = func(c);
  while (math.abs(fc) > tolerance) { // Usamos una tolerancia muy pequeña (1e-15) para la precisión
    if (fa * fc < 0) {
      b = c;
      fb = fc;
    } else {
      a = c;
      fa = fc;
    }
    c = math.bignumber(a).plus(b).div(2);
    fc = func(c);
  }
  return c.toNumber().toFixed(2); // Convertimos el resultado BigNumber a Number para obtener un resultado más manejable
}
