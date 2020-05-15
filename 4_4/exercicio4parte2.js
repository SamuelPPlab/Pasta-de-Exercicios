function maiorPalavra (a) {
let an = 0;
let mp = 0;
    //pega uma palavra do array
    for (let i = 0; i < a.length; i ++) {
        // faz um split nela
        let pd = a[i].split('');
        let t = pd.length;
    if(t > mp) {
        mp = t; 
        an = a[i];
    }
    }
return(an);
}
console.log(maiorPalavra(['Irineuson', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))