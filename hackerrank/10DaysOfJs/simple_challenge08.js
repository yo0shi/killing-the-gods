function getCount(objects){
    let total = 0;
    for (let obj of objects){
        if (obj.x === obj.y){
            total += 1;
        }
    }
    return total;
}

console.log(getCount([{x: 2, y: 8}, {x: 4, y: 16}, {x: 6, y: 6}, {x: 8, y: 24}, {x: 12, y: 12}]));
