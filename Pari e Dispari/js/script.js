// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari
// Dichiariamo chi ha vinto
// (corrispondenza tra scelta pari e dispari e somma pari o dispari)
// In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari


let valore;
let num1;

function PariDispari(string, number1)
{
    let value = "dispari";
    let number2 = Math.floor(Math.random() * 6) + 1;
    if((number1 + number2) % 2 == 0)
    {
        value = "pari";
    }

    if(string == value)
    {
        return "hai vinto";
    }
    else
    {
        return "hai perso";
    }
}

do
{
    valore = prompt("pari o dispari");
}
while(valore == null || (valore != "pari" && valore != "dispari"))

do
{
    num1 = parseFloat(prompt("inserisci un numero compreso tra 1 e 5"));
}
while(isNaN(num1))

alert(PariDispari(valore, num1));