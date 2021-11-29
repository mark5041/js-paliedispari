// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// (prima senza funzione e poi con funzione)

let parola;

function controlloParola(string) 
{
    let x = string.length - 1;
    let i = 0;
    let value = " non è una parola palindroma";
    while(string[i] == string[x] && value == " non è una parola palindroma")
    {
        if(i + 1 == x - 1 || x - 1 == i)
        {
            value = " è una parola palindroma";
        }
        else
        {
            i++;
            x--;
        }
    }
    return value;
    
}

do
{
    parola = prompt("inserisci una parola");
}
while(parola == null)

alert(parola + controlloParola(parola));



