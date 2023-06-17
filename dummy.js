// const addTwoNumbers = (num1, num2) => {
//     return num1 + num2;
// }

/*
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
*/

// let sumOfTwoNumbers = addTwoNumbers(0, 4)

// if (sumOfTwoNumbers > 5) {
//     console.log("Whoa thats a big number")
// } else {
//     console.log("Just a regular number")
// }

const checkIfSumIsLarge = (num1, num2) => {
    let summedNumbers = num1 + num2;
    if (summedNumbers > 5) {
        console.log("Whoa thats a big number")
    } else {
        console.log("Just a regular number")
    }
}

checkIfSumIsLarge(3, 4)