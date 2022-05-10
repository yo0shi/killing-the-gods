// Challenge - Day 4: Create a Rectangle Object

function Rectangle(a, b){
    if (a && b >= 1 && a && b <= 100){
        return {
            length: a,
            width: b,
            perimeter: 2 * (a + b),
            area: a * b
        };
    }
}

console.log(Rectangle(4, 5));
