// initialize grid
const container = document.getElementById('grid-container');

function makeRows(rows, cols) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let c = 0; c < rows * cols; c++) {
    const cell = document.createElement('div');
    container.appendChild(cell).className = 'grid-item';
  }

  function getRandomRgb() {
    const num = Math.round(0xffffff * Math.random());
    // eslint-disable-next-line no-bitwise
    const r = num >> 16;
    // eslint-disable-next-line no-bitwise
    const g = (num >> 8) & 255;
    // eslint-disable-next-line no-bitwise
    const b = num & 255;
    return `rgb(${r}, ${g}, ${b})`;
  }

  const gridItems = document.querySelectorAll('.grid-item');

  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].addEventListener('mouseover', function addColor() {
      gridItems[i].style['background-color'] = getRandomRgb();
    });
    gridItems[i].addEventListener(
      'mouseleave',
      function resetColor() {
        gridItems[i].style['background-color'] = '';
      },
    );
  }
}
makeRows(10, 10);

// create new grid
const generateBtn = document.getElementById('new-grid');

generateBtn.addEventListener('click', function setGridSize() {
  const gridSize = window.prompt('Enter grid size', '0');
  makeRows(gridSize, gridSize);
});
