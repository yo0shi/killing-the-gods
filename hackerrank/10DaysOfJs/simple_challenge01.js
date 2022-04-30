// HackerRank challenge: return an object through constructor function

var obj;

function getFixedCounter(k) {
    const counter = (function (){
        let value = 0;
        return {
            stepCounter: function (k){
                return {
                    increment: function (){
                        value += k;
                    },
                    decrement: function (){
                        value -= k;
                    },
                    getValue: function (){
                        return value;
                    }
                }
            }
        }
    })();
    return counter.stepCounter(k);
}

obj = getFixedCounter(5);
obj.increment();
console.log("First change: ", obj.getValue());
obj.decrement();
console.log("Second change: ", obj.getValue());
