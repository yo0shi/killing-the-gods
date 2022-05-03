// Challenge - Day 3: Throw

function isPositive(a){
    /*
    if (a >= -100 && a <= 100){
        if (a > 0){
            return "YES"
        } else if (a === 0){
            throw {message: "Zero Error"};
        } else {
            throw {message: "Negative Error"};
        }
    }
    */

    // I just wanted to have fun

    if (a >= -100 && a <= 100){
        switch ((a > 0 ? 1: a === 0 ? 0 : -1)){
            case 1:
                return "YES";
            case 0:
                throw {message: "Zero Error"};
            default:
                throw {message: "Negative Error"};
        }
    }
}

try {
    console.log(isPositive(-1));
} catch (error){
    console.log(error.message);
}
