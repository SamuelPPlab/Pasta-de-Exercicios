function numToLetter (nota) {
  if (nota<0) {
      console.log("Nota inválida")
} else if (nota <= 50) {
    console.log("Você tirou um F. :(")
} else if (nota<= 60) {
    console.log("Você tirou um E. :(")
} else if (nota<= 70) {
    console.log("Você tirou um D. :|")
} else if (nota<= 80) {
    console.log("Você tirou um C. :}")
} else if (nota<= 90) {
    console.log("Você tirou um B. :]")
} else if (nota<=100) {
    console.log("Você tirou um A. XD")
} else {
    console.log("Nota inválida")
}
}