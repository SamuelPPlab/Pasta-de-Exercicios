let a = ["*"];
let n = 8;

for (let l = 1; l < n; l++) {
    a = ["*"]
    for (let i = 1; i < n; i++) {
        a[0]+=("*")
    }
    console.log(a);
}
