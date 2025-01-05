myMath = {
    add: function() {
        let result = 0;
        for (let i = 0; i < arguments.length; i++) {
            result += arguments[i];
        }
        return result;
    },
    mul: function() {
        let result = 1;
        for (let i = 0; i < arguments.length; i++) {
            result *= arguments[i];
        }
        return result;
    },
    fact: function(num) {
        if (num < 0) { return NaN; }
        let result = 1;
        while (num > 1) {
            result *= num;
            num--;
        }
        return result;
    }
}
