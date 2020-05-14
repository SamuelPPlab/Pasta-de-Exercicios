let a = [""];
let n = 8;
let iii = 0

for (iii = 1; iii <= n ; iii++) {
   a = [""]
   if (iii === n) {
      for (let i = 0; i < iii; i++) {
         a[0] += "*";}
      } else {

         for (let ii = n; ii > iii; ii--) {
            a[0] += " ";
        } for (let i = 0; i < iii; i++) {
         a[0] += "*";
      }
   }  
   console.log(a);
}
