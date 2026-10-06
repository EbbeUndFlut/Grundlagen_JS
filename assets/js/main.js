console.log("Ich komme aus der main.js")
//addieren(4,4) // wirft einen Fehler
//platzAnzahl(6)  //wirft einen Fehler
hallo() // funktioniert durch das hoisting von javascript
// variabeln
var alt = 3   // -> alte art und weise

let name = "christian" // -> aktuelle art und weise

const alter = 42 // -> eine Konstante Variabel

console.log(name,alter)

// datentypen

let zahl = 67 // -> number
let geld = 44.95 // -> number

let beruf = "Programmierer" // -> string

let schalter = true // -> boolean

let nichts         // -> undefined
console.log(nichts)

let gehirn = null // -> null bewusst kein wert / datentyp = object

// ausgabe von datentypen

console.log(typeof zahl)
console.log(typeof geld)
console.log(typeof beruf)
console.log(typeof nichts)
console.log(typeof gehirn)

// operatoren
// mathematischen operatoren
let a = 10
let b = 3

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

// kleiner zwischen Spaß
console.log( 35 % 2) // prüfen ob eie Zahl gerade oder ungerade ist

// vergleichsoperatoren
let c = "10"
console.log( a > b) // true
console.log(a < b) // false
console.log(a >= b) // true
console.log(a <= b) // false
console.log("der verrückte vergleich: ",a == c) // true 
console.log(a != b)  // true
// der === operator prüft ob wert und typ gleich sind
console.log("der zweitverrücktste vergleich: ", a === c) // false
console.log("der zweitverrücktste vergleich: ", a !== c) // true

// logische operatoren
// verknüpfen bedingungen

console.log( 3 > 5 && 5 ==5 ) // UND Beide Bedingungen müssen true ergeben damit der ausdruck true ergibt
console.log(3 < 2 || 45 > 1) // ODER eine von beiden,oder beide, Bedingungen müssen true ergeben damit der ausdruck true ergibt
console.log(!true) // das ! (not) negiert den wert aus true wird false und umgekehrt

// Verzweigung
if(true){
    console.log("Mich siehst du wenn die Bedingung true ergibt")
} else{
    console.log("Mich siehst wenn die Bedingung false ergibt")
}

if(a < b){
    console.log("a ist echt klein")
}else if(a === b) {
    console.log("Wow wir sind gleich")
}else{
    console.log("Zwischen uns passt einfach gar nichts mehr")
}

/**
 * Nun seid ihr am zug. Gegeben ist ein Kontostand 1250
 * baut eine abfrage
 * wenn mehr als 1000 dann ausgabe "läuft bei dir"
 * wenn mehr als 0 aber weniger als 1000 "Da musste wohl härter arbeiten"
 * wenn 0 ausgabe "Musst diesen Monat wohl etwas haushalten"
 * wenn weniger 0 ausgabe "Warum haben deine Eltern nichts gelernt?"
*/

// Funktionen

function hallo(){
    console.log("Hallo")
}
hallo()

// funktion mit parameter
function halloMitName(vorname){  
    console.log("Hallo",vorname)
}
// funktionsaufruf mit argument 
halloMitName("Christian")

// funktion mit einem rückgabewert und 2 parameter
function sum(a,b){
    return a + b
}

//funktion mit default
function buch(titel = "Herr der Ringe -> Die Zwei Türme"){
    return titel
}
buch() // -> titel "Herr der Ringe......"
buch("Planet terror")// -> titel Planet terror
let erg = sum(5,4)
console
// funktionen in dieser schreibweise unterliegen nicht dem hoisting, se haben also keinen globalen scope
// speichern einer funktion als variabel
let platzAnzahl = function(regal){
    return regal
}
console.log(platzAnzahl(55))

// arrow functions
let addieren = (a,b) => {return a+b}
// kurzform
let addierenKurz = (a,b) => a + b

// Datenstruktur
// Array

const namen =[
    "Jan",
    "Öner",
    "Karyna",
    "Sue Lyn",
    "Ihor",
]
// namen = ["christian","christian","christian","christian","christian",]
console.log(namen[3]) // Sue Lyn
console.log(namen.length) // 5

namen[0] = "Adnan"
console.log(namen[0])

// Wertvariabel vs Referenzvariabel
// primitive datentypen werden immer kopiert
let eins = 56
let zwei = eins
console.log(zwei) // 56
eins = 77
console.log(zwei) // 56

// Objekte werden immer referenziert
let arrA = [4,5,6]
let arrB = arrA
console.log(arrB) // 4,5,6
arrA[0]=278
console.log(arrB) // 278,5,6 

// Schleifen
//einfache for Schleife
for(let i = 0; i<namen.length;i++){
    console.log(namen[i])
}

//for ... of schleife
for(const name of namen){
    console.log(name)
}
console.log("#################################################")
// foreach
namen.forEach(name=>console.log(name))
namen.forEach((element,index) => console.log(index,element))
namen.forEach((element,index,array)=>console.log(index,element,array))

// while
let schalterEins = true
while(schalterEins){
    console.log("dinge")
    schalterEins = false
}

//do while  -> wenn die schleife min einmal ausgeführt werden soll
let alterA = 0
do{
    console.log("Ich werde mindestens eimal ausgegeben")
    alterA++
}while(alterA > 18)

