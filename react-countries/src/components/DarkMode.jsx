import React, { useEffect } from 'react';
import Darkmode from 'darkmode-js';

const DarkMode = () => {
  useEffect(() => {
    const options = {
      bottom: '64px', // posición desde la parte inferior
      right: 'unset', // posición desde la derecha
      left: '32px', // posición desde la izquierda
      time: '0.5s', // transición
      mixColor: '#fff', // color de mezcla para el modo oscuro
      backgroundColor: '#fff', // color de fondo
      buttonColorDark: '#100f2c', // color del botón en modo oscuro
      buttonColorLight: '#fff', // color del botón en modo claro
      saveInCookies: false, // guardar el estado en cookies
      label: '🌓', // etiqueta del botón
    };

    const darkmode = new Darkmode(options);
    darkmode.showWidget();
  }, []);

  return <div />;
};

export default DarkMode;
