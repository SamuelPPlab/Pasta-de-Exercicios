let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], s = 0;

for (let i = 0; i < numbers.length; i++) {
    s += numbers[i]
}

if (s / numbers.length <= 20) {
    console.log("É menor que vinte ou vinte.");
} else {
    console.log("É maior que vinte.")
}