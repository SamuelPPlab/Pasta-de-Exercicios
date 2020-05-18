let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let na = []

for (let i = 0; i < numbers.length; i++) {
    
    if (i === numbers.length - 1){
        na[i] = numbers[i] * 2
    } else {
        na[i] = numbers[i] * numbers[i + 1];
    
    }
}
console.log(na)