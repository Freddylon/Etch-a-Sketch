// script.js
const gridContainer = document.getElementById('grid-container');
const resizeButton = document.getElementById('resize-button');

function createGrid(size) {
    gridContainer.innerHTML = ''; // Eliminar la cuadrícula existente
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = `${960 / size}px`;
        gridItem.style.height = `${960 / size}px`;
        gridContainer.appendChild(gridItem);
    }

    // Añadir efecto de "desplazamiento"
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'blue'; // Cambia el color según tus preferencias
        });
    });
}

// Crear la cuadrícula inicial de 16x16
createGrid(16);

resizeButton.addEventListener('click', () => {
    let newSize = prompt('Ingrese la cantidad de cuadrados por lado (máximo 100):');
    newSize = parseInt(newSize);
    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert('Por favor, ingrese un número válido entre 1 y 100.');
    }
});

