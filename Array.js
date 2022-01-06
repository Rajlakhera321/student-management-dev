//Normal Array

// let numbers = new Array(2);
// console.log(numbers.length); // 2
// console.log(numbers[0]); // undefined

// let numbers = new Array("2");
// console.log(numbers.length); // 1
// console.log(numbers[0]); // 2


//Array.of() Method

let numbers = Array.of(3);
console.log(numbers.length); // 1
console.log(numbers[0]); // 3

let chars = Array.of('A', 'B', 'C');
console.log(chars.length); // 3
console.log(chars); // ['A','B','C']

function arrayFromArgs() {
    return Array.prototype.slice.call(arguments);
}
var fruits = arrayFromArgs('Apple', 'Orange', 'Banana');
console.log(fruits);

function arrayFromArgs() {
    return Array.from(arguments);
}
console.log(arrayFromArgs(1, 'A'));

let doubler = {
    factor: 2,
    double(x) {
        return x * this.factor;
    }
}
let scores = [5, 6, 7];
let newScores = Array.from(scores, doubler.double, doubler);
console.log(newScores);

let widget = {
    color: 'red'
};

let clonedWidget = Object.assign({}, widget);

console.log(clonedWidget);