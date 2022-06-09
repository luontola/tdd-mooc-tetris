export class RotatingShape{
    shape;

    constructor(shape){

        let string = shape.replaceAll(" ", "").trim()
        let row = string.split("\n");
        let cells;
     
        this.shape = new Array(row.length);

        for(let y=0;y< row.length;y++){
            cells = Array.from(row[y]);
            this.shape[y] = new Array(cells.length);
            for(let x=0;x< cells.length;x++){
                this.shape[y][x] = cells[x];
            }
        }


    }



    rotateRight(){

        console.log('HEY');
        let rotated = [this.shape.length];
        for(let y= 0;y < this.shape.length;y++){
            rotated[y]= [this.shape.length];
            for(let x=this.shape.length-1;x>=0;x--){
                console.log(y+"-"+(this.shape.length-1-x)+"eq"+x+"-"+y);
                rotated[y][(this.shape.length-1-x)] = this.shape[x][y];
            }
        }
        console.log(rotated);

        return (rotated.join("\n").trim().toString()).split(",").join("").trim().toString() + '\n';
    }

    toString(){
        
        return (this.shape.join("\n").trim().toString()).split(",").join("").trim().toString() + '\n';
    }
}