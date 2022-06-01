// This code has some funny parts 

class Polygon {
    constructor(sides){
        this.sides = sides;
    }

    isLinear(){
        for (let side of this.sides){
            if (!Number.isInteger(side)){
                return false;
            }
        }

        return true;
    }

    isRegular(){
        for (let side of this.sides){
            if (this.sides[0] !== side){
                return false;
            }
        }

        return true;
    }

    perimeter(){
        if (this.isLinear()){
            return this.isRegular() ? this.sides.length * this.sides[0] : (() => {let total = 0; this.sides.forEach(side => total += side); return total})(); 
        }
    }
}

const geometry = new Polygon();

geometry.sides = [3, 4, 5];

console.log(geometry.perimeter());
