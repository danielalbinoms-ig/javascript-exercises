// Example

class Shape {
    constructor(edges) {
        this.edges = edges;
    }

    display() {
        console.log(`*A shape with ${this.edges} edges is displayed*`);
    }
}

class Quadrilateral extends Shape {
    constructor(sideLengths) {
        super(4);
        this.sideLengths = sideLengths;
    }

    area() {
        console.log('The area for a generic Quadrilateral is not implemented');
    }
    perimeter() {
        let perimeter = 0;
        for (let sideLength of this.sideLengths) {
            perimeter += sideLength;
        }
        return perimeter;
    }
}

class Square extends Quadrilateral {
    constructor(sideLength) {
        super(Array(4).fill(sideLength));
    }

    area() {
        return this.sideLengths[0] ** 2;
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super(3);
        this.base = base;
        this.height = height;
    }

    area() {
        return this.base * this.height / 2;
    }

    perimeter() {
        console.log('The perimeter for a generic Triangle is not implemented');
    }
}


// Second set of classes

class Animal {
    constructor(species) {
        this.species = species;
    }

    eats() { console.log(`*The ${this.species} eats*`); }

    makesSound() { console.log(`*The ${this.species} makes a sound*`); }
}

class Mammal extends Animal {
    constructor(species) {
        super(species);
        this.hasHair = true;
    }
}

class Dog extends Mammal {
    constructor() {
        super('Dog');
    }

    makesSound() { console.log('Woof!') }
}

class Cat extends Mammal {
    constructor() {
        super('Cat');
    }

    makesSound() { console.log('Meow!') }
}
