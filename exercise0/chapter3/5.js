function printObjProp(obj, ownProp=false) {
    let properties = [];
    if (ownProp) {
        for (let prop of Object.keys(obj)) {
            properties.push(prop);
        }
    } else {
        for (let prop in obj) {
            properties.push(prop);
        }
    }
    console.log(properties.join(', '));
}
