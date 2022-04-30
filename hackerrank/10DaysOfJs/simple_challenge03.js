function getLetter(str){
    let strLower = str.toLowerCase();
    
    if (strLower.length >= 1 && strLower.length <= 100){
        let letter = strLower[0];

        let first_substr = ['a', 'e', 'i', 'o', 'u'];
        let sec_substr = ['b', 'c','d', 'f', 'g'];
        let third_substr = ['h', 'j', 'k', 'l', 'm'];
        let fourth_substr = ['n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

        switch (letter){
            case first_substr[first_substr.indexOf(letter)]:
                return 'A';
            case sec_substr[sec_substr.indexOf(letter)]:
                return 'B';
            case third_substr[third_substr.indexOf(letter)]:
                return 'C';
            case fourth_substr[fourth_substr.indexOf(letter)]:
                return 'D';
        }
    }
}
