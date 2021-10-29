//Nach +3 Stunden- danach habe ich dies (für mich) als beste Lösung erachtet
//ich habe hier || als logischen Operator verwendet, somit konnte hier auf eine dritte Abfrage verzichtet werden

for (let i = 1; i <= 100; i++) {
  // Loop/Schleife
  let output = "";
  //Ausgegeben wird das Ergebnis von "i"
  if (i % 3 === 0) output += "Fizz ";
  //Hier prüfen wir, ob die Zahl (1-100) durch 3 teilbar ist und danach ein restwert von "0" bleibt
  if (i % 5 === 0) output += "Buzz";
  //Hier prüfen wir, ob die Zahl (1-100) durch 5 teilbar ist und danach ein restwert von "0" bleibt
  console.log(output || i);
}
