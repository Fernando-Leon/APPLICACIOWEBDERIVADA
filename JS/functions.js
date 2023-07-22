

const convertFunction = (f) => {
    let expresionRegular = /(\d*)x<sup>(\d+)<\/sup>/g;
    return cadenaModificada1 = f.replace(expresionRegular, function(match, coeficiente, exponente) {
      return coeficiente ? `(${coeficiente}*x^${exponente})`: `(x^${exponente})`;
    });
  }
  
  
function obtenerDerivada(cadenaFuncion) {
    const expr = math.parse(cadenaFuncion);
    const derivada = math.derivative(expr, 'x').toString();
    return derivada;
}

const derivadaIgualadaA0 = (derivada) => {
    let deivateToIqualTo0 = `${derivada}`; 
    return math.simplify(deivateToIqualTo0);
}