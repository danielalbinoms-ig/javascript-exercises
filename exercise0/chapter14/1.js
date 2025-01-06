const container = document.createElement('div');

const button = document.createElement('button');
button.textContent = 'Create Grid!';

const nLabel = document.createElement('label');
nLabel.textContent = 'N';
const n = document.createElement('input');
nLabel.appendChild(n);

const mLabel = document.createElement('label');
mLabel.textContent = 'M';
const m = document.createElement('input');
mLabel.appendChild(m);

document.body.appendChild(nLabel);
document.body.appendChild(mLabel);
document.body.appendChild(button);

document.body.appendChild(container);

button.addEventListener('click', function(event) {
    container.innerHTML = '';

    const cellSize = 50;

    container.style.height = `${n.value*cellSize}px`;
    container.style.width = `${m.value*cellSize}px`;
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${m.value}, ${cellSize}px)`;
    
    for (let i = 0; i < n.value*m.value; i++) {
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
});
