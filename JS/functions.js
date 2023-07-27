

const convertFunction = (f) => {
    let expresionRegular = /(\d*)x<sup>(\d+)<\/sup>/g;
    return cadenaModificada1 = f.replace(expresionRegular, function(match, coeficiente, exponente) {
      return coeficiente ? `(${coeficiente}*x^${exponente})`: `(x^${exponente})`;
    });
  }
  
  
function obtenerDerivada(cadenaFuncion) {
    const expr = math.parse(cadenaFuncion);
    const derivada = math.derivative(expr, 'x').toString();
    console.log(derivada); 
    return derivada;
}

const derivadaIgualadaA0 = (derivada) => {
    let deivateToIqualTo0 = `${derivada}`; 
    return math.simplify(deivateToIqualTo0);
}

const resolveDerivate = (derivate) => {
    let strDerivate = `${derivate} = 0`; 
    return resolveDerivate;
}

// Función para resolver una ecuación igualada a cero mediante el método de la bisección
// Función para resolver una ecuación igualada a cero mediante el método de la bisección
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

// Convierte el string de la ecuación en una función
function convertToFunction(str) {
  return function(x) {
    return eval(str);
  };
}

