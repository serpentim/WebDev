class Course {
    constructor(grade) {
        this.grade = Number.parseInt(grade, 10);
    }

    getGrade() {
        return (this.grade >= 4);
    }

    getCertificate() {
        if (this.getGrade()) {
            return "Выдать сертификат";
        }
        else {
            return "Курс не пройден";
        }
    }
}

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    const course = new Course(input);
    console.log(course.getCertificate());
    rl.close();
});