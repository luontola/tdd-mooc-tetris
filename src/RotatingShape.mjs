export class RotatingShape{
    shape;

    constructor(shape){
        let row = shape.replaceAll(" ", "").trim().split("\n");
        this.shape = Array.from(Array(row.length), () => new Array(row.length));
        for(let y=0;y< this.shape.length;y++) for(let x=0;x< this.shape.length;x++) this.shape[y][x] = Array.from(row[y])[x];
    }

    rotateRight(){
        let rotated = Array.from(Array(this.shape.length), () => new Array(this.shape.length));
        for(let y= 0;y < this.shape.length;y++)for(let x=this.shape.length-1;x>=0;x--) rotated[y][(this.shape.length-1-x)] = this.shape[x][y];
        return (rotated.join("\n").trim().toString()).split(",").join("").trim().toString() + '\n';
    }

    rotateLeft(){
        let rotated = Array.from(Array(this.shape.length), () => new Array(this.shape.length));
        for(let y =this.shape.length-1;y>=0;y--) for(let x=0;x<this.shape.length;x++) rotated[this.shape.length-1-y][x] = this.shape[x][y];
        return (rotated.join("\n").trim().toString()).split(",").join("").trim().toString() + '\n';
    }

    toString(){    
        return (this.shape.join("\n").trim().toString()).split(",").join("").trim().toString() + '\n';
    }
}