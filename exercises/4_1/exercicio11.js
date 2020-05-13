let PR = 3500
let R1 = 0
let R2 = 0

if (PR <= 1556.94) {
    R1 = PR - (PR * 0.08);
} else if (PR <= 2594.92) {
    R1 = PR - (PR * 0.09);
} else if (PR <= 5189.82) {
    R1 = PR - (PR * 0.11);
} else {
    R1 = PR - 570.88
}

if (PR <= 1903.98) {
    R2 = 0;
} else if (PR <= 2826.65){
    R2 = PR * 0.075;
} else if (PR <= 3751.05) {
    R2 = PR * 0.15;
} else if (PR <= 4664.68) {
    R2 = PR * 0.225;
} else {
    R2 = PR * 0.275
}

console.log("O salário é " + (R1 - R2) + ". Sonegue sempre.")