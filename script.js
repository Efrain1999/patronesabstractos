const contenedor = document.getElementById('contenedor');
const centroX = window.innerWidth / 2 - 75;
const centroY = window.innerHeight / 2 - 75;

// Crea el cuadro central al cargar
const cuadroCentral = crearCuadro(centroX, centroY);
contenedor.appendChild(cuadroCentral);
generarComposicion(cuadroCentral);

document.addEventListener('click', () => {
  const x = Math.random() * (window.innerWidth - 150);
  const y = Math.random() * (window.innerHeight - 150);

  // Genera nuevo cuadro con composición
  const cuadro = crearCuadro(x, y);
  contenedor.appendChild(cuadro);
  generarComposicion(cuadro);

  // Cambia el central también
  cuadroCentral.innerHTML = '';
  generarComposicion(cuadroCentral);
});

function crearCuadro(x, y) {
  const cuadro = document.createElement('div');
  cuadro.className = 'cuadro';
  cuadro.style.left = `${x}px`;
  cuadro.style.top = `${y}px`;
  return cuadro;
}

function generarComposicion(cuadro) {
  const formas = ['cuadrado', 'circulo', 'linea', 'triangulo'];
  const cantidad = Math.floor(Math.random() * 4) + 3;

  for (let i = 0; i < cantidad; i++) {
    const tipo = formas[Math.floor(Math.random() * formas.length)];
    const figura = document.createElement('div');
    figura.className = 'figura';

    const size = Math.random() * 40 + 10;
    figura.style.width = `${size}px`;
    figura.style.height = `${tipo === 'linea' ? 4 : size}px`;
    figura.style.left = `${Math.random() * (150 - size)}px`;
    figura.style.top = `${Math.random() * (150 - size)}px`;

    if (tipo === 'circulo') {
      figura.style.borderRadius = '50%';
    } else if (tipo === 'linea') {
      figura.style.height = '4px';
      figura.style.transform = `rotate(${Math.random() * 180}deg)`;
    } else if (tipo === 'triangulo') {
      figura.style.width = '0';
      figura.style.height = '0';
      const borderSize = size / 2;
      figura.style.borderLeft = `${borderSize}px solid transparent`;
      figura.style.borderRight = `${borderSize}px solid transparent`;
      figura.style.borderBottom = `${size}px solid white`;
      figura.style.background = 'none';
    }

    cuadro.appendChild(figura);
  }
}
