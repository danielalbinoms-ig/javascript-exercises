class Image {
    constructor(data, width, height, name) {
        this.width = width;
        this.height = height;
        this.name = name;
        this.data = data;
    }
    getPixel(x,y) {
        return this.data[(this.width * y) + x];
    }
}
