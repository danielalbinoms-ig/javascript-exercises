function addRec(array) {
    if (array.length === 0) { return 0; }
    return array.pop() + addRec(array);
}
