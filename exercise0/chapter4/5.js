function distance(x1,y1,z1,x2,y2,z2) {
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            throw new Error('incompatible data');
        }
    }
    if (arguments.length === 4) {
        x2 = z1;
        y2 = x2;
        return Math.sqrt((x2-x1)**2 + (y2-y1)**2);
    }
    if (arguments.length === 6) {
        return Math.sqrt((x2-x1)**2 + (y2-y1)**2 + (z2-z1)**2);
    }
    if (arguments.length < 4) {
        throw new Error('Insufficient parameters');
    } else if (arguments.length === 5 || arguments.length > 6) {
        throw new Error('Invalid number of parameters');
    }
}

console.log(distance(1, 2, 2, 2)); // returns 1 (done as part of exercise 5)
console.log(distance(1, 2, 1, 2, 2, 4));
// console.log(distance([1,2], [2,2])); // returns 1
// console.log(distance([1,2], [2,2,4])); // error: incompatible point data
