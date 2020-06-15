// BIGLIETTO TRENO

// Ask how many km he has to do and how old he is
var km = window.prompt("inserisci quanti km devi percorrere per arrivare a destinazione");
console.log(km);

var age = window.prompt("inserisci la tua età");
console.log(age);

// Calcolo prezzo biglietto

var costoKm = 0.21 * km;
var prezzo = 0;

if (age < 18) {
  prezzo = (costoKm - 20%costoKm).toFixed(2);
  document.getElementById('title').innerHTML = "Il costo del tuo biglietto è: " + prezzo + "€";
} else if (age > 64) {
  prezzo = (costoKm - 40%costoKm).toFixed(2);
  document.getElementById('title').innerHTML = "Il costo del tuo biglietto è: " + prezzo + "€";
} else {
  prezzo = (costoKm).toFixed(2);
  document.getElementById('title').innerHTML = "Il costo del tuo biglietto è: " + prezzo + "€";
}
