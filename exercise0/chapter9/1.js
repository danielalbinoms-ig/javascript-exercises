function dataParse(data) {
    let obj = eval(`(${data})`);
    return obj;
}

const str = "{prop1: 42, myFn: function(a, b) { return a+b+this.prop1;}}";
const obj = dataParse(str);

console.log(obj);
console.log(obj.myFn(1,2));
