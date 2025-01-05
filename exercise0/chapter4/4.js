function dataType() {
    let args = [];
    for (let arg of arguments) {
        let type = typeof arg;
        if (typeof arg === 'object') {
            if (arg instanceof Array ) {
                type = 'array';
            }
        }
        if (typeof arg === 'number') {
            if (String(arg).includes('.')) {
                type = 'float';
            }
        }
        args.push(type);
    }
    console.log(args.join(', '));
}
