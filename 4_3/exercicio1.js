let n = 9
let a = [];
let b = [];


for (let i = 0; i < n; i++) {
    a = [];
    for (let j = 0; j < n; j ++) {
        a.push("*");
    }
    b.push(a);
}

console.log(b);
