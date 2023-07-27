function graficarFuncion(fx = 'f(x) = x^2 - 4x + 3') {
    const applet = new GGBApplet({
      "width": 600,
      "height": 400,
      "appName": "classic", // Configurar "graphing" para graficar funciones
      "showToolBar": false, // Ocultar barra de herramientas
      "showAlgebraInput": false, // Ocultar entrada de álgebra
      "showResetIcon": false, // Ocultar icono de reinicio
      "showFullscreenButton": false, // Ocultar botón de pantalla completa
      "enableLabelDrags": false, // Deshabilitar arrastrar etiquetas
      "enableShiftDragZoom": true, // Deshabilitar zoom con Shift+arrastrar
      "enableRightClick": false, // Deshabilitar clic derecho
      "enableCAS": false, // Deshabilitar sistema de álgebra computacional
      "borderColor": "#000",
      "showMenuBar": false, // Ocultar barra de menú
      "showToolBarHelp": false, // Ocultar mensaje "Calculadora gráfica de GeoGebra"
      "errorDialogsActive": false,
      "useBrowserForJS": false,
      "appletOnLoad": function() {
        // Definir la función que deseas graficar (en este ejemplo, y = 2x + 3)
        ggbApplet.evalCommand(fx);

        // Configurar la visualización de la función
        ggbApplet.setVisible('f', true);
        ggbApplet.setColor('f', 255, 0, 255); // Color rojo para la función
        ggbApplet.setLineStyle('f', 5); // Línea continua
      }
    }, true);

    // Cargar el gráfico de la función
    applet.inject('ggb-graph');
}