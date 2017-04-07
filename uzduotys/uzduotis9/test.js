 /*
2017-04-06 Tautvydo testavimas
 */

var vardas,
pavarde,
vedes,
amzius,
skirybuData = null,
zmonosVardas;

vardas = "Petras"; //  String (tekstas)
vedes = true;  // boolean true/false   null, undefine
amzius = 18;

// Masyvas/Array
var masinosBagazine = ["atsarginisRatas", "kastuvas", "gesintuvas", "virve", "uzkurimoLaidai", "krokodilas"];

function spausdintiIKonsole(text) {
  console.log(text);
}
function spausdintiIKonsoleSuKomentaru(comment, variable) {
  console.log(comment, variable);
}
// i Array idedame papildoma elementus
masinosBagazine.push("atsarginiaiDrabuziai", "kepure");
masinosBagazine.push("maistas");
spausdintiIKonsole(masinosBagazine);
// console.warn("console blogai atvaizduoja isskleistus masyvus, bet gerai atvaizduoja skliaustuose []");
// masinosBagazine.splice(3, 2);
// spausdintiIKonsoleSuKomentaru("iskerpome is masyvo 2 elementus nuo trecio",masinosBagazine);
//
// masinosBagazine.slice(2);
// spausdintiIKonsoleSuKomentaru("iskroveme bagazine, pasilikome 2 daiktus",masinosBagazine);

// pakeiciam bagazineje kastuva i kede
// masinosBagazine[1] = "zvejybosKede";

//====================== begame per visa masyva  naudodami FOR ============
// for ( var i = 0; i < masinosBagazine.length; i++ ) {
//    // i = 0 -> 1 -> 2 - >
//    // tikriname kiekviena masyvo elementa
//     if( masinosBagazine[i] === "gesintuvas") {
//         masinosBagazine[i] = "zvejybosKede";
//     }
// }
// spausdintiIKonsole(masinosBagazine);
//  var i = 0;
// while ( i < masinosBagazine.length ) {
//   console.log(masinosBagazine[i]);
//   i++;
// }

// var i = 0;
// var visdarIeskome = true;
// while ( visdarIeskome ) {
//   console.log(masinosBagazine[i]);
//   if( masinosBagazine[i] === "virve" ) {
//     visdarIeskome = false;
//     masinosBagazine[i] = "dovana";
//   }
//   i++;
// }
// spausdintiIKonsole(masinosBagazine);

// var i = 0;
// while ( true ) {
//   console.log(masinosBagazine[i]);
//   if( masinosBagazine[i] === "virve" ) {
//     masinosBagazine[i] = "dovana";
//     break;
//   }
//   i++;
// }
// spausdintiIKonsole(masinosBagazine);
