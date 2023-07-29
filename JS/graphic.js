// Funcion para graficar la funcion ingresada y los maximos y minimos

let displayCanvas = document.getElementById('cont-img-flat');

let widthInPixels = displayCanvas.offsetWidth;

let heightInPixels = displayCanvas.offsetHeight;

function graficarFuncion(fx = 'f(x) = x^2 - 4x + 3', cord = {x: 0, y: 0}) {
    const applet = new GGBApplet({
      "width": widthInPixels,
      "height": heightInPixels,
      "appName": "classic",
      "showToolBar": false,
      "showAlgebraInput": false, 
      "showResetIcon": false, 
      "showFullscreenButton": false, 
      "enableLabelDrags": false, 
      "enableShiftDragZoom": true, 
      "enableRightClick": false, 
      "enableCAS": false, 
      "borderColor": "#000",
      "showMenuBar": false, 
      "showToolBarHelp": false, 
      "errorDialogsActive": false,
      "useBrowserForJS": false,
      "appletOnLoad": function() {
        ggbApplet.evalCommand(fx); // evaluamos la función
        ggbApplet.setVisible('f', true);
        ggbApplet.setColor('f', 255, 0, 255);
        ggbApplet.setLineStyle('f', 5);
        ggbApplet.evalCommand(`A=(${cord.x}, ${cord.y})`); // mostramos el punto en la grafica
        ggbApplet.setFixed('A', true);
      }
    }, true);

    applet.inject('ggb-graph');
}