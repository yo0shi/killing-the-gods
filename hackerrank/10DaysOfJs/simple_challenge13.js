'use strict';

// Day 6: Bitwise Operators
// In this challenge, basically, you have a function that returns the maximum value of a bitwise operation under each of the values of the subsequent pair of an already defined array.

function getMaxLessThanK(n, k){
    if (n >= 2){
        let seq = [];
        let maximum = 0;

        for (let i = 1; i <= n; ++i) seq.push(i);

        for (let i = 0; i <= seq.length; ++i){
            for (let j = i + 1; j <= seq.length; ++j){
                const BITWISE_VALUE = (i & j);
                BITWISE_VALUE < k ? (BITWISE_VALUE > maximum ? maximum = BITWISE_VALUE : false ) : false
            }
        }

        return maximum;
    }
}

console.log(getMaxLessThanK(127, 64));
