const gridSize = 5;
const cellSize = 50;

const grid = document.createElement('div');

grid.style.width = `${grid*cellSize}px`;
grid.style.height = `${grid*cellSize}px`;
grid.style.display = 'grid';
grid.style.gridTemplateColumns = `repeat(${gridSize}, ${cellSize}px)`;

for (let i = 0; i < gridSize**2; i++) {
    const element = document.createElement('div');

    element.style.display = 'flex';
    element.style.justifyContent = 'center';
    element.style.alignItems = 'center';
    element.style.fontSize = '2rem';
    element.style.width = `${cellSize}px`;
    element.style.height = `${cellSize}px`;
    element.style.border = '1px solid';
    element.innerHTML = i;
    element.dataset.number = i;
    
    grid.appendChild(element);
}

grid.addEventListener('mouseover', function(event) {
    if (event.target.dataset.number) {
        event.target.style.cursor = 'pointer';
    }
});

grid.addEventListener('click', function(event) {
    if (event.target.dataset.number) {
        alert(event.target.dataset.number);
    }
});

document.body.appendChild(grid);
