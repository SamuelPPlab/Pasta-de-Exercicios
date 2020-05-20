let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let c = 0;

for (let i = 0; i < numbers.length; i++) {
    if (c < numbers[i]) {
        c = numbers[i]
    } else {
        c = c
    }
}
console.log(c)