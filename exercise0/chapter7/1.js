function hexToRGB(hex) {
    hex = hex.toUpperCase();

    const regex = /^#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/;

    const match = regex.exec(hex);

    if (!match) {
        console.log('Not a valid hex color');
        return null;
    }

    let rgb = [];

    const digits = new Map([
        ['0', 0],
        ['1', 1],
        ['2', 2],
        ['3', 3],
        ['4', 4],
        ['5', 5],
        ['6', 6],
        ['7', 7],
        ['8', 8],
        ['9', 9],
        ['A', 10],
        ['B', 11],
        ['C', 12],
        ['D', 13],
        ['E', 14],
        ['F', 15],
    ]);

    for (let i = 1; i <= 3; i++) {
        rgb.push(16 * digits.get(match[i][0]) + digits.get(match[i][1]));
    }

    return `rgb(${rgb.join(', ')})`;
}

console.log(hexToRGB('#3020ff'));
