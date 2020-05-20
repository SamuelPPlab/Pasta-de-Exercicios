function comaparadorDe3 (a, b, c) {
    let comp = undefined;
    if (a > b) {
        comp = a;
    } else {
        comp = b
    }

    if(c > comp) {
        console.log(c);
    } else {
        console.log(comp);
}
}