let urduMarks = +prompt("Enter Urdu Marks"),
phyMarks = +prompt("Enter Physics Marks"),
mathMarks = +prompt("Enter Math Marks"),
bioMarks = +prompt("Enter Biology Marks"),
compMarks = +prompt("Enter Computer Marks")

const totalSubjects = 5;
const totalMarks = urduMarks + phyMarks + mathMarks + bioMarks + compMarks;

let percentage = (totalMarks / (totalSubjects * 100)) * 100;

grade = (percentage >= 80 && percentage <= 100) ? "A+" :
        (percentage >= 70 && percentage < 80) ? "A" :
        (percentage >= 60 && percentage < 70) ? "B" :
        (percentage >= 50 && percentage < 60) ? "C" :
        (percentage >= 40 && percentage < 50) ? "D" : "Fail";

        

document.write(`
    <h1>Mark Sheet</h1>
    <p>Urdu Marks: ${urduMarks}</p>
    <p>Physics Marks: ${phyMarks}</p>
    <p>Math Marks: ${mathMarks}</p>
    <p>Biology Marks: ${bioMarks}</p>
    <p>Computer Marks: ${compMarks}</p>
<br><br>
    <p>Total Marks: ${totalMarks}</p><br>
    <p>Percentage: ${percentage.toFixed(2)}%</p><br>
    <p>Grade: ${grade}</p>
`);
