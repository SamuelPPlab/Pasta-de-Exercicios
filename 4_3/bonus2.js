function ePrimo (n) {
    let count = 0;  
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count ++;
        } 
    }
    if (count === 2) {
        return "É primo."
    } else {
        return "Não é primo"
    }
    }
console.log(ePrimo(7));

