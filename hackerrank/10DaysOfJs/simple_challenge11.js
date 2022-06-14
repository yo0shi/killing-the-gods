'use strict';
const readinput = require('readline-sync');

function sides(literals, area, perimeter){
    let x = (perimeter + Math.sqrt((perimeter * perimeter) - 16 * area)) / 4;
    let x2 = (perimeter - Math.sqrt((perimeter * perimeter) - 16 * area)) / 4;

    return [x, x2].sort();
}

function main(){
    let s1 = +(readinput.question());
    let s2 = +(readinput.question());

    [s1, s2] = [s1, s2].sort();
    
    const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
    
    console.log((s1 === x) ? s1 : -1);
    console.log((s2 === y) ? s2 : -1)
}

main()
