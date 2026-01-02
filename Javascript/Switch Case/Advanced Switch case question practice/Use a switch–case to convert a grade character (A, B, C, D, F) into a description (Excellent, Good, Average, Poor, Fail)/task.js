/*4. Use a **switch–case** to convert a **grade character (A, B, C, D, F)** into a description (Excellent, Good, Average, Poor, Fail).*/

let grade = 'A';

switch (grade) {
    case 'A':
        console.log("Excellent");
        break;

    case 'B':
        console.log("Good");
        break;

    case 'C':
        console.log("Average");
        break;

    case 'D':
        console.log("Poor");
        break;

    case 'F':
        console.log("Fail");
        break;

    default:
        console.log("Invalid grade");
}
