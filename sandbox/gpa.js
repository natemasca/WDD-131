function convertGradeToPoints

function calculateGpa(gpaPoints) {

}

function cleanGrade(grade) {
    return.grade.trim().toUpperCase()
}


function getGrades() {
    const gradesEl = document.querySelector(".grades");
    let grades = gradesEl.value.split(",");
    grades = grades.map(cleanGrade);
    return grades;
}

function calculateHandler(event) {
    const gpaPoints = getGrades();
    const gpaPoints = grades
    const gpa = calculateGpa(gpaPoints);
    outputGpa(gpa, "#output");
}

function outputGpa(gpa, selector) {

}

document.querySelector("#submitButton").addEventListener("click", calculateHandler);
