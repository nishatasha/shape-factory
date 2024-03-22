// shapes.js

// Object factory function to create shapes
function capitalizeFirstLetter(name) {
    // Convert the entire string to lowercase and then capitalize the first letter
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
export default function createShape(name, color) {
    return {
        name: capitalizeFirstLetter(name),
        color: color,
        getInfo: function() {
            const colorName = getColorName(color);
            return ` ${this.name} ${colorName}`;
        }
    };
}

// Define color names and their corresponding values
   const colorNames = {
    '#09f': 'Blue',
    '#9f0': 'Green',
    '#f90': 'Orange',
    '#f09': 'Pink',
    '#90f': 'Purple'
};

// Function to get color name based on color code
function getColorName(colorCode) {
    return colorNames[colorCode] || 'Unknown';
}
