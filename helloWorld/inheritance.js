function Rect(width, height) {
    this.width = width;
    this.height = height;

    this.area = function(){
        return this.width * this.height;
    }
}

another = new Rect(2,3);

console.log(another.area());
