// main.js

import createShape from './shapes.js';


const shapeContainer = document.querySelector('.shape-container');
const shapeSelect = document.querySelector('.shape-select');
const colorSelect = document.querySelector('.color-select');
const createBtn = document.querySelector('.create-btn');
const infoDisplay = document.querySelector('.info-display');

const shapes = [];

createBtn.addEventListener('click', () => {
  if (shapes.length < 24) {
    const shapeType = shapeSelect.value;
    const color = colorSelect.value;
    const newShape = createShape(shapeType, color);
    shapes.push(newShape);
    createShapeDiv(newShape, shapeType);
} else {
// If the limit is reached, disable the create button or change its appearance
createBtn.disabled = true;
infoDisplay.textContent= 'Reached the maximum limit' // Disable the button
// Alternatively, you can change the button's appearance to indicate it's disabled
// createBtn.classList.add('disabled'); // Add a CSS class to style the disabled button
}
});

let shapeCounter = 0; // Counter to keep track of the shape position

function createShapeDiv(shape, shapeType) {
  shapeCounter++; // Increment the shape counter
    const shapeDiv = document.createElement('div');
    shapeDiv.className = `shape ${shape.name}`;
    shapeDiv.style.backgroundColor = shape.color;
    if (shapeType === 'square') {
      shapeDiv.classList.add('square');
    }
    shapeDiv.addEventListener('click', () => {
        infoDisplay.innerHTML = `Unit ${shapeCounter} : ${shape.getInfo()}`;
    });
    
    shapeContainer.appendChild(shapeDiv);
}

