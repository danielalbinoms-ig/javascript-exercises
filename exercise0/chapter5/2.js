class Building {
    constructor() {
        this.floors = new Map();
        this.pastSearches = new Map();
    }

    addFloor(floorNumber) {
        const floor = new Floor(floorNumber);
        this.floors.set(floorNumber, floor);
        return floor;
    }
    search(query) {
        const pastSearch = this.pastSearches.get(query);        
        if (pastSearch) {
            console.log('From past search:');
            if (pastSearch.user) {
                console.log(`${query}\nUser: ${pastSearch.user.name}\nFloor: ${pastSearch.user.floor.number}\nRoom: ${pastSearch.user.room.number}`);
            } else {
                console.log(`${query}\nFloor: ${pastSearch.floor.number}\nRoom: ${pastSearch.room.number}`);
            }
            return pastSearch;
        }
        for (let floor of this.floors.values()) {
            const result = floor.search(query);
            if (result) {
                if (result.user) {
                    console.log(`${query}\nUser: ${result.user.name}\nFloor: ${result.user.floor.number}\nRoom: ${result.user.room.number}`);
                } else {
                    console.log(`${query}\nFloor: ${result.floor.number}\nRoom: ${result.room.number}`);
                }
                this.pastSearches.set(query, result);
                return result;
            }
        }
        console.log(`There is no ${query} in the building.`);
    }
}

class Floor {
    constructor(floorNumber) {
        this.number = floorNumber;
        this.rooms = new Map();
    }

    addRoom(roomNumber) {
        const room = new Room(roomNumber);
        this.rooms.set(roomNumber, room);
        return room;
    }
    search(query) {
        for (let room of this.rooms.values()) {
            const result = room.search(query);
            if (result) { return result; }
        }
    }
}

class Room {
    constructor(roomNumber) {
        this.number = roomNumber;
        this.equipment = [];
        this.people = [];
    }

    addEquipment(item) {
        this.equipment.push(item);
    }
    addPerson(person) {
        this.people.push(person);
    }
    search(query) {
        for (let item of this.equipment) {
            if (query === item.id) { return item; }
        }
        for (let person of this.people) {
            if (query === person.name) { return person; }
            for (let item of person.equipment) {
                if (query === item.id) { return item; }
            }
        }
    }
}

class Equipment {
    constructor(id) {
        this.id = id;
        this.user;
        this.floor;
        this.room;
    }

    addUser(user) {
        this.user = user;
        user.equipment.push(this);
    }
    addLocation(floor, room) {
        this.floor = floor;
        this.room = room;
    }
}

class Person {
    constructor(name) {
        this.name = name;
        this.floor;
        this.room;
        this.equipment = [];
    }

    assignEquipment(item) {
        this.equipment.push(item);
        item.addUser(this);
    }
    addLocation(floor, room) {
        this.floor = floor;
        this.room = room;
    }
}


const building = new Building();

const floor1 = building.addFloor(1);
const floor2 = building.addFloor(2);

const room101 = floor1.addRoom(101);
const room102 = floor1.addRoom(102);
const room201 = floor2.addRoom(201);
const room202 = floor2.addRoom(202);

const daniel = new Person('daniel');
const laptop = new Equipment('laptop');
const laptop2 = new Equipment('laptop2');
const projector = new Equipment('projector');

daniel.addLocation(floor1, room101);
laptop.addUser(daniel);
daniel.assignEquipment(laptop2);
projector.addLocation(floor2, room202);

room101.addPerson(daniel);
room202.addEquipment(projector);

building.search('daniel');
building.search('laptop');
building.search('laptop2');
building.search('projector');
building.search('mouse');
building.search('daniel');
building.search('laptop');
building.search('projector');
