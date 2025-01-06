const gridSize = 5;
const cellSize = 50;

const container = document.createElement('div');

container.style.width = `${gridSize*cellSize}px`;
container.style.height = `${gridSize*cellSize}px`;
container.style.display = 'grid';
container.style.gridTemplateColumns = `repeat(${gridSize}, ${cellSize}px)`;

for (let i = 0; i < gridSize**2; i++) {
    const element = document.createElement('div');

    element.style.display = 'flex';
    element.style.justifyContent = 'center';
    element.style.alignItems = 'center';
    element.style.fontSize = '2rem';
    element.style.width = `${cellSize}px`;
    element.style.height = `${cellSize}px`;
    element.style.border = '1px solid';
    element.textContent = i;
    
    container.appendChild(element);
}

container.addEventListener('mouseenter', function(event) {
    event.target.style.cursor = 'pointer';
}, true);

container.addEventListener('click', function(event) {
    alert(event.target.textContent);
});

document.body.appendChild(container);
