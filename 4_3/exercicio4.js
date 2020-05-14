let a = [""];
let n = 17;
let alt = (n -1 ) / 2 + 1;
let l = (n % 2);
let e = (n -1 ) / 2
 
for (let iii = 0; iii < alt; iii ++) {
    a = [""]
    for (let ii = e; ii > iii; ii--) {
        a[0] += " ";
    }
    for (let i = 0; i < l; i++) {
        a[0] += "*";
        
    }
    for (let ii = e; ii > iii; ii--) {
        a[0] += " ";
    }
    l += 2
    console.log(a);
}



