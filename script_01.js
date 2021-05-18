/***** Variablen 01 *******/

// Zeilen-Kommentar

/**
   Block-Kommentar
 */

//Ausgabe
//console.log("Hello World");
//console.log(firstName);

// Deklaration + Wertzuweisung I
/*
let firstName; // Deklaration (Definition)
firstName = "Max" // Wertzuweisung 
console.log(firstName); // Ausgabe 
let familyName = "Muster"; // Deklaration + Wertzuweisung (14+15 zusammengefast)
console.log(familyName); // Ausgabe
console.log(firstName + " "  + familyName); // leerzeichen und ausgaben kombiniert 
*/

// Deklaration + Wertzuweisung II
/*
let firstName,familyName;
firstName = prompt("Bitte Vornamen eingeben:");
familyName = prompt("Bitte Namen eingeben:");
console.log("Hallo, " + firstName + " "  + familyName +"!");
*/

// JS ist eine untypisierte Sprache! | untyped
/*
let test; //Deklaration
test = "hi"; //string
test = 2; //number
test = true; //boolean
console.log("Typ: " + typeof test);
console.log("Inhalt: " + test);
*/

/***** Variablen 02 *****/
/*
// Deklaration
let ageJohn, ageMark;
let birthYearJohn, birthYearMark;

// Werzuweisung | Assignment 
let date = new Date();
let year = date.getFullYear();
//console.log(date);
//console.log(year);
ageJohn = 25;
ageMark = 30; 

//Operation (Differnz)
birthYearJohn = year - ageJohn;
birthYearMark = year - ageMark;

console.log("Aktelle Jahr: " + year); 
console.log("birtYearJohn: " + birthYearJohn);
console.log("birtYearMark: " + birthYearMark);
*/

/***** Variablen 3 *****/

let ageJhon, ageMark;
ageJohn = 25;
ageMark = 30;

// Operation (Vergleich/Test)
let isJohnOlder = (ageJohn > ageMark); //Entscheidungsstrukturen 
console.log(isJohnOlder);