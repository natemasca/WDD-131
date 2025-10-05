
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate) // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join("") // set the innerHTML

const grades = ['A', 'B', 'C'];
function gradeToPoints(grade) {
    let points = 0;
    if (grade === 'A') {
        points = 4;
    }   else if (grade === "B") {
        points = 3;
    }
    return points;
}
const gpa = grades.map(gradeToPoints);
const pointsTotal = gpa.reduce(function(total, item) {
    return total + item;
});
const ngpa = pointsTotal / gpa.length;
console.log(ngpa)
document.querySelector("#myList").innerHTML = gpa.join();