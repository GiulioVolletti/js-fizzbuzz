var stampa = document.getElementById('log_stampato').innerHTML


// Scrivi un programma che stampi i numeri da 1 a 100,
for (var i = 1; i < 101; i++) {
  // ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
  if ((i % 5 == 0) && (i % 3 == 0)) {
    // Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
    stampa += "FizzBuzz" + "<p>" + "</p>";
    console.log("FizzBuzz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
    stampa += "Buzz" + "<p>" + "</p>";
  } else if (i % 3 == 0) {
    console.log("Fizz");
    stampa += "Fizz" + "<p>" + "</p>";
  } else {
    console.log(i);
    stampa += i + "<p>" + "</p>";
  }
}
document.getElementById('log_stampato').innerHTML += stampa
console.log(stampa);
