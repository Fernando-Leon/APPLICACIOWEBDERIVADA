// tags view result
const funcionIngresada = document.getElementById('funcion-ingresada');
const derivada1 = document.getElementById('derivada-1');
const derivada2 = document.getElementById('derivada-2');
const igulacionDerivadaP = document.getElementById('igualacion-derivada');
const puntoCritico = document.getElementById('punto-critico');

const showResult = (funcionMain, derivadaUno, derivadaDos, iqualToZero) => {
    funcionIngresada.innerHTML += funcionMain;
    derivada1.innerHTML += derivadaUno;
    derivada2.innerHTML += derivadaDos;
    igulacionDerivadaP.innerHTML += iqualToZero;
};