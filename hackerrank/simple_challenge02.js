const readLine = require("readline");
const { stdin: input, stdout: output } = require("process");

function getGrade(score){
    let grade;

    if (score >= 0 && score <= 30){
        if (score > 25 && score <= 30){
            grade = 'A';
        } else if (score > 20 && score <= 25){
            grade = 'B';
        } else if (score > 15 && score <= 20){
            grade = 'C';
        } else if (score > 10 && score <= 15){
            grade = 'D';
        } else if (score > 5 && score <= 10){
            grade = 'E';
        } else {
            grade = 'F';
        }
        return grade;
    }
}

const score = readLine.createInterface({ input, output });

score.question("", answer => {
    console.log(getGrade(answer));
    score.close();
});
