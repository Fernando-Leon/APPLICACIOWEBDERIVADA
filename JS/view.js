// tags view result
const funcionIngresada = document.getElementById('funcion-ingresada');
const derivada = document.getElementById('derivada');
const igulacionDerivadaP = document.getElementById('igualacion-derivada');
const puntoCritico = document.getElementById('punto-critico');
const maxsAndMins = document.getElementById('dots-extrems');
const sustitutedX = document.getElementById('sustitution-x');
const resultfx = document.getElementById('dot-min-max');

const showResult = (funcionMain, derivadaUno, derivadaDos, iqualToZero, dotCritical, values) => {
    funcionIngresada.innerHTML = `Funcion ingrsada: f(x): ${funcionMain}`;
    derivada.innerHTML = `Derivada: f\'(x): ${derivadaUno}`;
    igulacionDerivadaP.innerHTML = `Resolvemos ${iqualToZero}`;
    puntoCritico.innerHTML = `x = ${dotCritical}`;    
    sustitutedX.innerHTML = `Sustituimos ${dotCritical} en f(x): f(${dotCritical}) = ${values[1]}`;
    resultfx.innerHTML = `f(${dotCritical}) = ${values[0]}`;
    maxsAndMins.innerHTML = `Puntos maximos y minimos en: (${dotCritical} | ${values[0]})`;
};