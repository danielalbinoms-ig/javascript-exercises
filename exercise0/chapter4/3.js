class NumberValue {
    #value;
    
    constructor(num) {
        this.value = num;
    }
    
    set value(num) {
        if (typeof num === 'number') {
            this.#value = num;
        }
    }

    get value() {
        return this.#value;
    }
}
