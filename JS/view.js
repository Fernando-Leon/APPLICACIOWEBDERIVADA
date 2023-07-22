// tags view result
const funcionIngresada = document.getElementById('funcion-ingresada');
const derivada1 = document.getElementById('derivada-1');
const igulacionDerivadaP = document.getElementById('igualacion-derivada');
const puntoCritico = document.getElementById('punto-critico');

const showResult = (funcionMain, derivada, derivadaIgual0) => {
    funcionIngresada.innerHTML += funcionMain;
    derivada1.innerHTML += derivada;
    igulacionDerivadaP.innerHTML += derivada;
};