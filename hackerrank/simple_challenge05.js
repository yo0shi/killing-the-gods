function reverseString(s){
    try {
        console.log(s.join('').reverse().join(''));
    } catch (except){
        console.log(except.message);
        console.log(s);
    }
}

reverseString(Number("1234"));
