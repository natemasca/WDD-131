const PI = 3.14;
let radius = 3;
let area = 0;
area = circleArea(radius)
console.log(area)
radius = 4;
area = radius * radius * PI;
function circleArea(radius) {
    area = radius * radius *PI
    return area
}
area = circleArea(radius)

console.log(area)