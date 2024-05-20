const prompt = require('prompt-sync')({ sigint: true });
const mark = Number(prompt('Enter Your Mark: '));
let grade = "";

if (mark > 90) {
    grade = "A";
} else if (mark > 80 && mark <= 89) {
    grade = "B";
} else if (mark > 70 && mark <= 79) {
    grade = "C";
} else if (mark > 60 && mark <= 69) {
    grade = "D";
} else if (mark > 50 && mark <= 59) {
    grade = "E";
} else {
    grade = "Failed";
}

console.log(grade=='Failed'?'You are Failed':`Your grade is '${grade}'`);
